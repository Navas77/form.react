import React,{useState} from "react";

function Buttonclick2() {
    const[click,setClick]= useState("hello")

    function HandleClick(){
        setClick("iam a developer")

    }
    return(
        <div>
        <p>{click}</p>
        <button  onBlur={HandleClick}>button</button>
        </div>
    )
}
export default Buttonclick2;