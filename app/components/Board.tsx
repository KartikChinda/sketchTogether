"use client";

import { useEffect, useLayoutEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store";
import { menuItems } from "../contants";
import { actionitemClick } from "../slice/menuSlice";

const Board = () => {
    // creating a ref because we need to do changes on the canvas element. And we arent in 2014 so we will not be using id. 
    const canvasRef = useRef(null);
    const shouldDraw = useRef(false);

    // for undo redo functionality. 
    const historyPointer = useRef(0);
    const historyStore: any = useRef([]);



    // useELayoutEffect because we want the width and height to be manipulated before we even manipulate colors and sizes.  
    useLayoutEffect(() => {
        // typescript trivia: if you didnt have the ! statement, you would have needed to specify the type of canvas as a HTMLelement | null. 
        if (!canvasRef.current) return;
        const canvas: HTMLCanvasElement = canvasRef.current;
        const context = canvas.getContext('2d');
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        // to make sure that the background beneath the sketch in the download is white and not black. Stackoverflow FTW again. 
        if (context !== null) {
            context.fillStyle = '#F1F1F1';
            context.fillRect(0, 0, canvas.width, canvas.height);
        }

        // so we can store a blank canvas. 
        if (context !== null) {
            const firstBlankImage = context.getImageData(0, 0, canvas.width, canvas.height);
            historyStore.current.push(firstBlankImage);
            historyPointer.current = historyStore.current.length - 1;
        }

        const getPointerPosition = (e: MouseEvent | TouchEvent) => {
            const touch = (e as TouchEvent).touches ? (e as TouchEvent).touches[0] : null;
            return {
                clientX: touch ? touch.clientX : (e as MouseEvent).clientX,
                clientY: touch ? touch.clientY : (e as MouseEvent).clientY,
            };
        };

        // We need three listeners to draw successfully, mouse Down, mouse drag, and mouse Release. Also, we add listeners to the reference, not the context. 

        const handlePenDown = (e: MouseEvent | TouchEvent) => {
            e.preventDefault();
            shouldDraw.current = true;
            // init the Canvas
            const { clientX, clientY } = getPointerPosition(e);
            context?.beginPath();

            context?.moveTo(clientX, clientY)
        }

        const handlePenMove = (e: MouseEvent | TouchEvent) => {

            if (!shouldDraw.current) return;
            e.preventDefault();
            // this is boilerplate on how you atr supposed to use canvasAPI.
            const { clientX, clientY } = getPointerPosition(e);
            context?.lineTo(clientX, clientY);
            context?.stroke();
        }

        // this is different from the other e type we added, becase this is not a react event but an event listener. 
        const handlePenUp = (e: MouseEvent | TouchEvent) => {
            shouldDraw.current = false;
            e.preventDefault();
            // to update the historyStore ie history of canvas with each draw. 
            if (context !== null) {
                const currImage = context.getImageData(0, 0, canvas.width, canvas.height);

                // why did we not use push pop here? Cant do redo w it. 

                historyStore.current.push(currImage);
                historyPointer.current = historyStore.current.length - 1;
            }

        }

        canvas.addEventListener('mousedown', handlePenDown);
        canvas.addEventListener('mousemove', handlePenMove);
        canvas.addEventListener('mouseup', handlePenUp);
        canvas.addEventListener('touchstart', handlePenDown);
        canvas.addEventListener('touchmove', handlePenMove);
        canvas.addEventListener('touchend', handlePenUp);

        return () => {
            // got to clean up after our own mess. 
            canvas.removeEventListener('mousedown', handlePenDown);
            canvas.removeEventListener('mousemove', handlePenMove);
            canvas.removeEventListener('mouseup', handlePenUp);
            canvas.removeEventListener('touchstart', handlePenDown);
            canvas.removeEventListener('touchmove', handlePenMove);
            canvas.removeEventListener('touchend', handlePenUp);
        }




    }, [])

    // accessing the color and the size of the eraser and the penciil. 
    const { activeMenuItem, actionMenuItem } = useSelector((state: RootState) => state.menu)
    const { color, size } = useSelector((state: RootState) => state.toolbox[activeMenuItem])

    useEffect(() => {
        // typescript trivia: if you didnt have the ! statement, you would have needed to specify the type of canvas as a HTMLelement | null. 
        if (!canvasRef.current) return;
        const canvas: HTMLCanvasElement = canvasRef.current;
        const context = canvas.getContext('2d');

        // Accessing properties of the canvas. 
        if (context !== null) {
            context.strokeStyle = color!;
            context.lineWidth = size!;
            // the exclamation marks essentially tells TS that okay, trust me this value is not going to be null. And we can add that here since even the default values of color and size are not NULL. 
        }

    }, [color, size])


    // Download, Undo and Redo features. 

    // We are creating a dispatch here, explained further why. 
    const dispatch = useDispatch();



    useEffect(() => {
        if (!canvasRef.current) return;
        const canvas: HTMLCanvasElement = canvasRef.current;
        const context = canvas.getContext('2d');


        if (actionMenuItem === menuItems.DOWNLOAD) {
            // Canvas essentially renders a URL of the picture you want. So, we create an anchor tag and pass the URL onto this tag, which downloads it. Stackoverflow FTW. 
            const URL = canvas.toDataURL();
            const anchor = document.createElement('a');
            anchor.href = URL;
            anchor.download = 'yourSketch.jpg';
            anchor.click();


        } else if (actionMenuItem === menuItems.UNDO || actionMenuItem === menuItems.REDO) {
            if (actionMenuItem === menuItems.UNDO && historyPointer.current > 0) historyPointer.current -= 1;
            if (actionMenuItem === menuItems.REDO && historyPointer.current < historyStore.current.length - 1) historyPointer.current += 1;


            const currCanvasImage = historyStore.current[historyPointer.current];
            // takes in the image, and starting x annd starting y. 
            if (context !== null) context.putImageData(currCanvasImage, 0, 0);
        }

        // now, this will download your image, but if you make changes and click on download again, nothing will happen. This is because this useEffect works on the change in the actionMenuItem, which will still be DOWNLOAD. So, after each download, it must be set to NULL. 
        dispatch(actionitemClick(null));



    }, [actionMenuItem])






    return (
        <>
            <canvas className=" touch-none" ref={canvasRef}></canvas>
        </>
    )
}

export default Board