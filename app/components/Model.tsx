
import React from 'react'

// this needs to be written otherwise you will be given the implicit type any error. 
interface Props {
    handleClick: () => void
}

const Model = ({ handleClick }: Props) => {



    return (

        <div className='fixed top-2 md:top-0 inset-0 bg-opacity-30 backdrop-blur-sm flex justify-center items-center font-sans z-20 bg-[#F1F1F1]'>
            <div className='bg-[#23120B] border-2 rounded-xl border-[#fff] flex relative top-0 flex-col gap-3 md:w-[70%] w-[100%]  m-5 p-2 justify-center items-center group'>
                <span className='text-5xl md:text-7xl  text-center font-bold text-[#FDB827]'><span className='text-2xl md:text-3xl font-semibold'>Welcome to</span><br /> Sketch Together</span>
                <div className='text-md text-[#F1F1F1] p-3 text-center mt-10'>
                    Sketch Together is an online interactive game to be played between two players.<br /> <br />
                    <span className='font-bold'>Instructions to play the game</span>
                    <ul className='text-left text-sm list-disc pl-10 text-[#f1f1f1]'>
                        <li>Player one draws on the board for one full minute, until a notification is flashed to change players. </li>
                        <li>Player 2 then continues on sketching for another one minute, until the notification is flashed to change players again. </li>
                        <li>This is continued with player 1 and 2 alternatively sketching until the timer runs out.</li>
                    </ul>

                    <br /> <br />
                    <span className='font-semibold text-[#f1f1f1]'>
                        Sketch away till 10 minutes, and see if you can create a masterpiece together!
                    </span>
                </div>

                <button onClick={handleClick} className='rounded-xl bg-[#FDB827] text-[#21209C] p-2 px-3 font-bold mb-5 hover:bg-[#21209C] hover:text-[#fdb827]'>
                    Play
                </button>
            </div>
        </div>
    )
}

export default Model