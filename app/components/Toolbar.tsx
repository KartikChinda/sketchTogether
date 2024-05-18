import React from 'react'
import { colors } from '../contants'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../store'
import { changeColor, changeSize } from '../slice/toolsSlice'
import Timers from './Timers'





const Toolbox = () => {

    // redux stuff 
    const dispatch = useDispatch();

    const activeMenuItem = useSelector((state: RootState) => state.menu.activeMenuItem)

    const { color, size } = useSelector((state: RootState) => state.toolbox[activeMenuItem])

    const handleBrushSize = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(changeSize({ item: activeMenuItem, size: e.target.value }))
    }

    const handleColorChange = (newColor: string) => {
        dispatch(changeColor({ item: activeMenuItem, color: newColor }))
    }








    return (
        <div className='absolute bottom-10 bg-[#23120B] w-[95%] md:w-[1/4] left-1/2 rounded-md  px-2 py-1 duration-75 translate-x-[-50%] flex flex-row md:gap-10 gap-5 hover:px-5 hover:py-2 shadow-xl shadow-[#21209C]'>

            <div className='flex flex-col lg:flex-row overflow-hidden p-1 gap-2 md:p-4 mx-auto justify-center items-center'>
                {activeMenuItem === 'pencil' && <div className='flex'>
                    {colors.map((col) => {
                        return (
                            <div id={col} className='border-2 p-1 m-2 border-white h-[30px] w-[30px] rounded-md hover:border-[#FDB827] hover:cursor-pointer ' style={{ backgroundColor: col }} onClick={() => handleColorChange(col)}></div>
                        )
                    })}
                </div>}
                <input className='md:ml-10 lg:mr-10  p-0' type="range" min={1} max={20} step={1} onChange={(e) => handleBrushSize(e)} value={size} />
                <Timers />
            </div>
            <div>

            </div>

        </div>
    )
}

export default Toolbox