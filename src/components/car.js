import { useState } from "react";

function Car(){
    const[color,setcolor]=useState("red");
    const[model,setmodel]=useState("mustang");
    const[year,setyear]=useState("1946");
    const[brand,setbrand]=useState("FORD");

    return(
        <>
        <h1>my {brand} </h1>

        <p>this {color} {model}  is  {year} </p>
        </>
    )
}
export default Car;
