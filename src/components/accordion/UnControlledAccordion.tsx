import React, {useState} from "react";

type AccordionTitlePropsType = {
    title: string;
}

function AccordionTitle(props: AccordionTitlePropsType) {
    console.log("AccordionTitle rendering")
    return <h3>--{props.title}--</h3>;

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
    return (
        <div><AccordionTitle title={props.titleValue}/>
            <button onClick={() => {setCollapse(!collapsed)}}>TOGGLE</button>
            {collapsed && <AccordionBody/>}
        </div>

    )
}


export default Accordion;