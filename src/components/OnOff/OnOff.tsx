import React, {useState} from 'react';

const OnOff = () => {
    const [on, setOn] = useState(false)
    let onStyle ={
        width: "30px",
        height:"20px",
        border: "1px solid black",
        display: "inline-block",
        marginLeft:"2px",
        backgroundColor: on ? "green" : "white",
        padding:"2px"
    }
    let offStyle = {
        width: "30px",
        height: "20px",
        border: "1px solid black",
        display: "inline-block",
        marginLeft: "2px",
        backgroundColor: on ? "white" : "red",
        padding: "2px"
    }
    let indicatorStyle ={
        width: "10px",
        height:"10px",
        border: "1px solid black",
        borderRadius:"50%",
        display: "inline-block",
        marginLeft: "5px",
        backgroundColor: on ? "green" : "red"
    }

    return (
        <div>
            <div style={onStyle} onClick={()=>{setOn(true)}}>ON</div>
            <div style={offStyle} onClick={()=>{setOn(false)}}>OFF</div>
            <div style={indicatorStyle}></div>
        </div>
    );
};

export default OnOff;