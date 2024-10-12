import React,{useState} from "react";

function SimpleForm() {
    const [name, setName] = useState('');

    const handlesubmit = (event) => {
        event.preventDefault();//prevent page refresh
        alert(  `Hello,${name}!`);
};

    return(
        <form onSubmit={handlesubmit}>
            <input
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}//Update name on input change
            />
            <button type="submit">Submit</button>
        </form>
    )
}

export default SimpleForm;