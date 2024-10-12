
import React, { memo } from 'react'

const Jumper=({stepten})=>{
    console.log("iam a jumper");
    

  
    return (
      <button onClick={stepten}>step 10</button>
    );
};
    const MemorizedJumper = memo(Jumper);
    
 
export default MemorizedJumper;