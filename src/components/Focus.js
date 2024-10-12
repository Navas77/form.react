import React,{useRef} from "react";
import './Focus.css'

function UseRef(){
    const inputRef = useRef(null);

    const handleFocus = ()  => {
        if(inputRef.current) {
            inputRef.current.focus();
        }
    };

    return(
        <div className="main">
            <input type="text " ref={inputRef} placeholder="click the button 
            to focus me"/>
            <button onClick={handleFocus}>focus the input</button>
        </div>
    );
        }
        export default UseRef;
    