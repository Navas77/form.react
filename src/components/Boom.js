import React,{useState,useEffect} from "react"

function Boom(){
    const[time,settime]=useState(0);
    const[boom,setboom]=useState(false);
    
    useEffect(()=>{
        setboom(false)
       const timeout= setTimeout(()=>{
            setboom(true)
        },time*1000);

        return()=> clearTimeout(timeout);
    },[time]);

        return(
           <div>
                <div classname="don">
                
                <button onClick={()=>settime(time+1)}>button</button>
                <p>set:{time}</p>
                <button onClick={()=>settime(time-1)}>button</button>
               
                
               </div>
               {
                boom && time ? (
                    <div>
                        <p>boom</p>
                        </div>
                ):null
               }
               </div>
           
        )
    

}
export default Boom;