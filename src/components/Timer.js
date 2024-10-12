import React,{useState,useEffect} from 'react';
import './Timer.css'

function Timer(){
    const [seconds,setSeconds] = useState(0);//initial and set the seconds

    useEffect(() => {
        const interval = setInterval(()=>{
            setSeconds(prevSeconds => prevSeconds + 1);
        },1000);

        return () => clearInterval(interval);
    },[]);

    return (
        <div>
            <p>Timer: {seconds} seconds</p>

        </div>
    )
}
export default Timer;