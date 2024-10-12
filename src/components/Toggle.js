
import React,{useRef} from "react";

function Togglediv(){
    const divRef=useRef(null);

    const toggleVisibility = () =>{
        if(divRef.current){
            divRef.current.style.display=divRef.current.style.display === "none"? "block":"none";
        }
    };
    return(
        <div>
            <button onClick={toggleVisibility}>
                Togglediv
            </button>
            <div ref={divRef} style={{marginTop:"10px",padding:"20px",border:"1px solid black"}}>
                this is a toggle div!
            </div>
        </div>
    )


}
export default Togglediv
