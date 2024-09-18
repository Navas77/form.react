import React from 'react'
import wonderla from './image/wonderla.jpg'
import './image.css'
function Image(){
    return (
        <>
        <div class="heading">
        <h2>BEAUTY OF PACHAP</h2>
        </div>
<div class="container">
    <div className ="image">
        <img src={wonderla} alt="" width="100%"></img>
    </div>
    <div class="para">
        <p> 
            tan tan tan

        </p>
    </div>
</div>


        </>
    )
}
export default Image