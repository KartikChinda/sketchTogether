"use client";

import { useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store";

const Board = () => {
    // creating a ref because we need to do changes on the canvas element. And we arent in 2014 so we will not be using id. 
    const canvasRef = useRef(null);

    // useEffect because we want the width and height to be manipulated on the first render of the component. 
    useEffect(() => {
        // typescript trivia: if you didnt have the ! statement, you would have needed to specify the type of canvas as a HTMLelement | null. 
        if (!canvasRef.current) return;
        const canvas: HTMLCanvasElement = canvasRef.current;
        const context = canvas.getContext('2d');
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

    }, [])

    const activeMenuItem = useSelector((state: RootState) => state.menu.activeMenuItem)
    const { color, size } = useSelector((state: RootState) => state.toolbox[activeMenuItem])

    console.log(color, size);

    return (
        <>
            <canvas ref={canvasRef}></canvas>
        </>
    )
}

export default Board