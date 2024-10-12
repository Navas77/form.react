import React, {useState} from "react";

function ButtonClick1() {
    const [message, setMessage] = useState('Hello');

    function handleClick() {
        setMessage('Developer')
    }

    return (
        <div>
        <p>{message}</p>
        <button onClick={handleClick}>Click Me</button>
        </div>
    )
}

export default ButtonClick1