import React from 'react';
import './App.css';
import {Rating} from "./components/Rating/UnControlledRating";
import OnOff from "./components/OnOff/OnOff";
import UnControlledAccordion from "./components/accordion/UnControlledAccordion";

function App() {
    console.log("App rendering")
    return (
        <div>

            {/*<PageTitle title={"This is App component"}/>
            <PageTitle title={"My friends"}/>
            Article 1*/}

            {/*<Accordion titleValue={"Menu"} collapsed={false}/>*/}
            {/*<Accordion titleValue={"Users"} collapsed={false}/>*/}
            <UnControlledAccordion titleValue={"Menu"}/>
            <UnControlledAccordion titleValue={"Users"}/>
            <OnOff/>

            <Rating/>
        </div>
    );
}

type PageTitlePropsType = {
    title: string;
}

function PageTitle(props: PageTitlePropsType) {
    return <h1>{props.title}</h1>
}

export default App;
