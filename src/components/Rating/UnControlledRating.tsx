import React, {useState} from 'react';

type RatingPropsType = {
    value: number
}

export function Rating(props: RatingPropsType) {
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
    if (props.selected < props.id) {
        return (<span onClick={onMainClickHandler}>star </span>)
    } else {
        return <span><b>star </b></span>
    }
}