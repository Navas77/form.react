import React, { useState } from 'react'
import './Counter.css'

function Counter() {
    const [count,setcount] = useState(0); 
    return (
        <div>
            <p> count: {count}</p>
            <button onClick={()=> setcount(count + 1)}>Increase</button>
            
            <button onClick={()=> setcount(count -1 )}>Decrease</button>
        </div>
    );
}

export default Counter