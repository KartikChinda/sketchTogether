"use client";
import { useEffect, useState } from 'react';
import PlayerModel from './PlayerModel';

const Timers = () => {

    const [minutes, setminutes] = useState<number>(0)
    const [seconds, setseconds] = useState<number>(4)
    const [isTimerActive, setisTimerActive] = useState<boolean>(true)
    const [showComponent, setshowComponent] = useState<boolean>(false)

    // https://stackoverflow.com/questions/51376589/typescript-what-type-is-setinterval/59681620#59681620
    // let timer: ReturnType<typeof setInterval>;

    const [playerOnePlays, setplayerOnePlays] = useState<boolean>(false);

    useEffect(() => {

        let intervalID = setInterval(() => {
            if (minutes === 0 && seconds === 0) setisTimerActive(false);
            if (seconds !== 0) {
                setseconds(seconds - 1);
            } else {
                setminutes(minutes - 1);
                setseconds(59);

            }
        }, 1000)

        return () => {
            clearInterval(intervalID)
        }
    },)

    useEffect(() => {
        setplayerOnePlays(!playerOnePlays);
        // console.log("Player one plays: ", playerOnePlays)
        setshowComponent(true);

        const toRef = setTimeout(() => {
            clearTimeout(toRef);
            setshowComponent(false);

        }, 3000);


    }, [minutes])



    return (
        <>
            <div className='flex flex-col md:flex-row justify-center items-center'>
                <div>
                    {isTimerActive ? (<div className='text-2xl font-bold text-[#FDB827]'>{minutes < 10 ? "0" + minutes : minutes} : {seconds < 10 ? "0" + seconds : seconds}<span className='text-sm font-semibold'> left, </span></div>) : (<div className='text-2xl font-bold text-[#FDB827]'>Game over! <span className='text-sm font-medium text-[#FDB827] hidden md:block'>
                        Download your sketch by clicking on the download button in the menu. </span></div>)}
                </div>
                <div>
                    {isTimerActive ? <div className='text-md font-medium text-[#FDB827] ml-2 mt-2'>
                        <span className='font-bold'>{playerOnePlays ? "Player 1" : "Player 2"}</span> drawing.
                    </div> : <div className='text-md text-[#FDB827] text-center md:hidden'>Download your sketch by clicking on the download button in the menu. </div>}
                </div>


                {showComponent && <PlayerModel isOneActive={playerOnePlays} />}

            </div>

        </>



    )
}

export default Timers