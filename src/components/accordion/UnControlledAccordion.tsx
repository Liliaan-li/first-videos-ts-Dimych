import React, {useReducer} from "react";
import {reducer} from "./reducer";

type AccordionTitlePropsType = {
    title: string
    onClick: () => void
}


function AccordionTitle(props: AccordionTitlePropsType) {
    console.log("AccordionTitle rendering")
    return (<h3 onClick={() => {
            props.onClick()
        }}>--{props.title}--</h3>
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
    let [state, dispatch] = useReducer(reducer, {collapsed: false})
    return <div><AccordionTitle title={props.titleValue} onClick={() => {
        dispatch({type: "collapsed"})
    }}/>
        {
            !state.collapsed && <AccordionBody/>
        }
    </div>
}


export default Accordion;