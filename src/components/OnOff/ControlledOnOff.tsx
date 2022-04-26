import React from 'react';

type OnOffType={
    on: boolean
    onClick:(on:boolean)=>void
}
const OnOff = (props:OnOffType) => {

    let onStyle ={
        width: "30px",
        height:"20px",
        border: "1px solid black",
        display: "inline-block",
        marginLeft:"2px",
        backgroundColor: props.on ? "green" : "white",
        padding:"2px"
    }
    let offStyle = {
        width: "30px",
        height: "20px",
        border: "1px solid black",
        display: "inline-block",
        marginLeft: "2px",
        backgroundColor: props.on ? "white" : "red",
        padding: "2px"
    }
    let indicatorStyle ={
        width: "10px",
        height:"10px",
        border: "1px solid black",
        borderRadius:"50%",
        display: "inline-block",
        marginLeft: "5px",
        backgroundColor: props.on ? "green" : "red"
    }
    const onClickOnOff=()=>{
        props.onClick(!props.on)
    }
    return (
        <div>
            <div style={onStyle} onClick={onClickOnOff}>ON</div>
            <div style={offStyle} onClick={onClickOnOff}>OFF</div>
            <div style={indicatorStyle}></div>
        </div>
    );
};

export default OnOff;