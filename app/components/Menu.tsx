"use client";
import React, { useState } from 'react';
import { FaPen, FaEraser, FaUndo, FaRedo, FaDownload } from "react-icons/fa";
import { useDispatch } from 'react-redux';
import { menuitemClick, actionitemClick } from '../slice/menuSlice';
import { menuItems } from '../contants';


const MenuCard = () => {

    const [clickedItem, setclickedItem] = useState("pencil")


    // for redux 
    const dispatch = useDispatch()
    const handleItemClicked = (itemName: string) => {
        // Here, we dont have to pass in state or the itemname as an action object, that is done by redux. What we are passing essentially is just action.payload. 
        dispatch(menuitemClick(itemName));
        setclickedItem(itemName);
    }


    const handleActionMenuItem = (itemName: string) => {
        dispatch(actionitemClick(itemName));
        setclickedItem(itemName)
    }





    return (
        <div className='absolute top-10 bg-[#23120B] w-[1/4] left-1/2 rounded-md px-2 py-1 duration-75 translate-x-[-50%] flex flex-row md:gap-10 gap-5 hover:px-5 hover:py-2 justify-between items-center shadow-xl shadow-[#21209C]'>
            <div className='h-[40px] text-3xl flex justify-center items-center hover:cursor-pointer hover:bg-[#21209C] text-[#FDB827] rounded-md m-2 w-[40px]' onClick={() => handleItemClicked(menuItems.PENCIL)} style={clickedItem === "pe1517ncil" ? { backgroundColor: "#21209C" } : {}}><FaPen /></div>
            <div className="h-[40px] text-3xl flex justify-center items-center hover:cursor-pointer hover:bg-[#21209C] text-[#FDB827] rounded-md m-2 w-[40px]" onClick={() => handleItemClicked(menuItems.ERASER)} style={clickedItem === "eraser" ? { backgroundColor: "#21209C" } : {}}><FaEraser /></div>
            <div className='h-[40px] text-3xl flex justify-center items-center hover:cursor-pointer hover:bg-[#21209C] text-[#FDB827] rounded-md m-2 w-[40px]' onClick={() => handleActionMenuItem(menuItems.UNDO)}><FaUndo /></div>
            <div className='h-[40px] text-3xl flex justify-center items-center hover:cursor-pointer hover:bg-[#21209C] text-[#FDB827] rounded-md m-2 w-[40px]' onClick={() => handleActionMenuItem(menuItems.REDO)}><FaRedo /></div>
            <div className='h-[40px] text-3xl flex justify-center items-center hover:cursor-pointer hover:bg-[#21209C] text-[#FDB827] rounded-md m-2 w-[40px]' onClick={() => handleActionMenuItem(menuItems.DOWNLOAD)} ><FaDownload /></div>
        </div>
    )
}

export default MenuCard