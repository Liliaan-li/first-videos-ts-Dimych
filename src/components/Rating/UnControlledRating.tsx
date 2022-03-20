import React, {useState} from 'react';



export function Rating() {
    let [rated, setRate] = useState<number>(0);
    console.log("Rating rendering")
    let onClickHandler = (id:number)=>{
        setRate(id)}
    return (
        <div>
            <Star id={1} onClick={onClickHandler} selected={rated}/>
            <Star id={2} onClick={onClickHandler} selected={rated}/>
            <Star id={3} onClick={onClickHandler} selected={rated}/>
            <Star id={4} onClick={onClickHandler} selected={rated}/>
            <Star id={5} onClick={onClickHandler} selected={rated}/>
        </div>
    )
}

type StarPropsType = {
    selected: number
    id:number
    onClick:(id:number)=>void
}

function Star(props: StarPropsType) {
    let onMainClickHandler=()=>{
        props.onClick(props.id)
    }

    return ((props.selected < props.id) ? <span onClick={onMainClickHandler}>star </span> : <span><b>star </b></span>)
}