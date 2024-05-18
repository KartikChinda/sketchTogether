"use client";
import { useEffect, useState } from 'react';

const Timers = () => {

    const [minutes, setminutes] = useState<number>(5)
    const [seconds, setseconds] = useState<number>(0)
    const [isTimerActive, setisTimerActive] = useState<boolean>(true)

    // https://stackoverflow.com/questions/51376589/typescript-what-type-is-setinterval/59681620#59681620
    // let timer: ReturnType<typeof setInterval>;

    const [playerOnePlays, setplayerOnePlays] = useState<boolean>(true);

    useEffect(() => {

        let intervalID = setInterval(() => {
            if (seconds % 10 === 0) setplayerOnePlays((playerOnePlays) => !playerOnePlays);
            console.log("Player one plays: ", playerOnePlays)
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


    return (
        <>
            {isTimerActive ? (<div className='text-2xl font-bold text-[#FDB827]'>{minutes < 10 ? "0" + minutes : minutes} : {seconds < 10 ? "0" + seconds : seconds}<span className='text-sm font-semibold'> left </span></div>) : (<div className='text-2xl font-bold text-[#FDB827]'>Game over!</div>)}
        </>



    )
}

export default Timers