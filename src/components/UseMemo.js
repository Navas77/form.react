import React,{useState,useMemo}from"react"

function UseMemo(){
     const[count,setCount]=useState(0);
    const[inputvalue,setInputValue]=useState(" ");

    const expensiveCalculation=useMemo(()=>{
        console.log("calculating...");
        let total=0;
        for(let i=0;i<1000000;i++){
            total+=1;

        }
        return total + count;
    },[count]);
        
 return(
<div>
    <h1>useMemo example</h1>
    <p>count: {count}</p>

    <button onClick={()=>setCount(count+1)}>incrementcount</button>
    <p>Expensive calculation result:{expensiveCalculation}</p>

    <input type="text"  value={inputvalue}
    onChange={(e)=> setInputValue(e.target.value)}
    placeholder="type something"/>
</div>
);
}
export default UseMemo;