import {useState} from "react";

function Favcolor(){
    const[color,setColor] = useState("red");

    return(
        <>
        <h1>my favourite color is{color}</h1>

        <button
        type="button"  onClick={() =>setColor("black")}>
            button
        </button>
        </>
    )
};
export default Favcolor;