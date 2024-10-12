import React,{useState,useEffect} from "react";

function Alert(){
    const[alert,setAlert]=useState(0);

    useEffect(() =>{
        setAlert("component has been updated:");
    },[]);
    return(
        <div>
            <p>count:{alert}</p>

            <button onClick={()=>setAlert(alert+1)}>button</button>
        </div>
    )
    }
    export default Alert;

