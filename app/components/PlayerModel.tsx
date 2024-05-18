import React from 'react'

// this needs to be written otherwise you will be given the implicit type any error. 
interface Props {
    isOneActive: boolean
}

const PlayerModel = ({ isOneActive }: Props) => {



    return (

        <div className='fixed inset-0 bg-opacity-30 backdrop-blur-sm flex justify-center items-center font-sans z-20 bg-[#F1F1F1]'>
            <div className='bg-[#23120B] border-2 rounded-xl border-[#fff] flex relative top-14 md:top-0 flex-col gap-3 md:w-[70%] w-[100%]  m-5 p-2 justify-center items-center group'>
                <span className='text-3xl  text-center font-bold text-[#FDB827]'>{isOneActive ? "Player 1, draw!" : "Player 2, draw!"}</span>
            </div>
        </div>
    )
}

export default PlayerModel
