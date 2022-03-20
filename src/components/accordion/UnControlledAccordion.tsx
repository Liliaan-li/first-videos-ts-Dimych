import React, {useState} from "react";

type AccordionTitlePropsType = {
    title: string
    onClick: (collapsed: boolean)=>void
    collapsed: boolean
}

function AccordionTitle(props: AccordionTitlePropsType) {
    console.log("AccordionTitle rendering")
    let onClickHandler=()=>{
        props.onClick(props.collapsed)
    }
    let title =(!props.collapsed) ? <div><AccordionBody/></div> : <></>
    return (<><h3 onClick={onClickHandler}>--{props.title}--</h3>
    <div>{title}</div></>
    );

}

function AccordionBody() {
    console.log("AccordionBody rendering")
    return <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
    </ul>

}

type AccordionPropsType = {
    titleValue: string
}

function Accordion(props: AccordionPropsType) {
    let [collapsed, setCollapse] = useState(false)
    let onMainClickHandler =(collapsed: boolean)=>{
        setCollapse(!collapsed)
    }
    return (<AccordionTitle title={props.titleValue} onClick={onMainClickHandler} collapsed={collapsed}/>    )
}


export default Accordion;