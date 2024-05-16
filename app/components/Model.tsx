import React from 'react'

// this needs to be written otherwise you will be given the implicit type any error. 
interface Props {
    handleClick: () => void
}

const Model = ({ handleClick }: Props) => {



    return (

        <div className='fixed top-2 md:top-0 inset-0 bg-opacity-30 backdrop-blur-sm flex justify-center items-center font-sans z-20 bg-[#F1F1F1]'>
            <div className='bg-[#23120B] border-2 rounded-xl border-[#fff] flex relative top-14 md:top-0 flex-col gap-3 md:w-[70%] w-[100%]  m-5 p-2 justify-center items-center group'>
                <span className='text-7xl  text-center font-bold text-[#FDB827]'><span className='text-3xl font-semibold'>Welcome to</span><br /> Sketch Together</span>
                <p className='text-md text-[#F1F1F1] p-3 text-center mt-10'>
                    Sketch Together is an online interactive game to be played between two players.<br /> <br /> The game is simple, you draw on the board till the timer runs down, and then the second person continues with your drawing, until the timer runs down again.
                    <br /> <br />
                    <span className='font-semibold'>
                        Sketch away till 4 minutes, and see if you can create a masterpiece together!
                    </span>
                </p>

                <button onClick={handleClick} className='rounded-xl bg-[#FDB827] text-[#21209C] p-2 px-3 font-bold mb-5 hover:bg-[#21209C] hover:text-[#fdb827]'>
                    Play!
                </button>
            </div>
        </div>
    )
}

export default Model