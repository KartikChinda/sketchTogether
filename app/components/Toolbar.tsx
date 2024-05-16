import React from 'react'
import { colors } from '../contants'

const Toolbox = () => {

    const handleBrushSize = () => {

    }



    return (
        <div className='absolute bottom-10 bg-[#23120B] w-[95%] md:w-[1/4] left-1/2 rounded-md  px-2 py-1 duration-75 translate-x-[-50%] flex flex-row md:gap-10 gap-5 hover:px-5 hover:py-2 shadow-xl shadow-[#21209C]'>
            <div className='flex flex-col md:flex-row overflow-hidden p-1 md:p-4 mx-auto justify-center items-center'>
                <div className='flex'>
                    {colors.map((col) => {
                        return (
                            <div id={col} className='border-2 p-1 m-2 border-white h-[30px] w-[30px] rounded-md hover:border-[#FDB827] ' style={{ backgroundColor: col }}></div>
                        )
                    })}
                </div>

                <input className='md:ml-10 mt-4 md:mt-0' type="range" min={1} max={10} step={1} onChange={handleBrushSize} />
            </div>
            <div>

            </div>

        </div>
    )
}

export default Toolbox