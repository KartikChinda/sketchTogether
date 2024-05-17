"use client";

import { useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store";

const Board = () => {
    // creating a ref because we need to do changes on the canvas element. And we arent in 2014 so we will not be using id. 
    const canvasRef = useRef(null);
    const shouldDraw = useRef(false);




    // useELayoutEffect because we want the width and height to be manipulated before we even manipulate colors and sizes.  
    useEffect(() => {
        // typescript trivia: if you didnt have the ! statement, you would have needed to specify the type of canvas as a HTMLelement | null. 
        if (!canvasRef.current) return;
        const canvas: HTMLCanvasElement = canvasRef.current;
        const context = canvas.getContext('2d');
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        // We need three listeners to draw successfully, mouse Down, mouse drag, and mouse Release. Also, we add listeners to the reference, not the context. 

        const handleMouseDown = (e: MouseEvent) => {
            shouldDraw.current = true;
            // init the Canvas
            context?.beginPath();
            context?.moveTo(e.clientX, e.clientY)
        }

        const handleMouseMove = (e: MouseEvent) => {
            if (!shouldDraw.current) return;
            // this is boilerplate on how you atr supposed to use canvasAPI. 
            context?.lineTo(e.clientX, e.clientY);
            context?.stroke();
        }

        // this is different from the other e type we added, becase this is not a react event but an event listener. 
        const handleMouseUp = (e: MouseEvent) => {
            shouldDraw.current = false;
        }

        canvas.addEventListener('mousedown', handleMouseDown);
        canvas.addEventListener('mousemove', handleMouseMove);
        canvas.addEventListener('mouseup', handleMouseUp);

        return () => {
            // got to clean up after our own mess. 
            canvas.removeEventListener('mousedown', handleMouseDown);
            canvas.removeEventListener('mousemove', handleMouseMove);
            canvas.removeEventListener('mouseup', handleMouseUp);
        }


    }, [])

    // accessing the color and the size of the eraser and the penciil. 
    const activeMenuItem = useSelector((state: RootState) => state.menu.activeMenuItem)
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



    return (
        <>
            <canvas ref={canvasRef}></canvas>
        </>
    )
}

export default Board