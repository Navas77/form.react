import React,{useCallback,useState} from"react"
import Jumper from "./Jumper";

function Greatcount(){
    const [count,setcount]=useState(0);
    
    const stepOne=()=>{
        setcount((prev)=> prev+1);
    };
    const stepten= useCallback(()=>{
        setcount((prev)=>prev+10);
    },[]);

    return(
        <div>
            <h1>usecallback</h1>
            <div className="card">
                <h2>count is-{count}</h2>
                <button onClick={stepOne}>step 1</button>
                <br/>
                <br/>
                <Jumper stepten={stepten}/>
            </div>
        </div>
    )
}
export default Greatcount;