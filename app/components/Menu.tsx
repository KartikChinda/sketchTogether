import React from 'react';
import { FaPen, FaEraser, FaUndo, FaRedo, FaDownload } from "react-icons/fa";

const MenuCard = () => {
    return (
        <div className='absolute top-10 bg-[#23120B] w-[1/4] left-1/2 rounded-md px-2 py-1 duration-75 translate-x-[-50%] flex flex-row md:gap-10 gap-5 hover:px-5 hover:py-2 justify-between items-center shadow-xl shadow-[#21209C]'>
            <div className='h-[40px] text-3xl flex justify-center items-center hover:cursor-pointer hover:bg-[#21209C] text-[#FDB827] rounded-md m-2 w-[40px]'><FaPen /></div>
            <div className='h-[40px] text-3xl flex justify-center items-center hover:cursor-pointer hover:bg-[#21209C] text-[#FDB827] rounded-md m-2 w-[40px]'><FaEraser /></div>
            <div className='h-[40px] text-3xl flex justify-center items-center hover:cursor-pointer hover:bg-[#21209C] text-[#FDB827] rounded-md m-2 w-[40px]'><FaUndo /></div>
            <div className='h-[40px] text-3xl flex justify-center items-center hover:cursor-pointer hover:bg-[#21209C] text-[#FDB827] rounded-md m-2 w-[40px]'><FaRedo /></div>
            <div className='h-[40px] text-3xl flex justify-center items-center hover:cursor-pointer hover:bg-[#21209C] text-[#FDB827] rounded-md m-2 w-[40px]'><FaDownload /></div>
        </div>
    )
}

export default MenuCard