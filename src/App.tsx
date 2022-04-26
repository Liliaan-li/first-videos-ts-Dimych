import React, {ChangeEvent, useState} from 'react';
import './App.css';
import {UnControlledRating} from "./components/Rating/UnControlledRating";
import OnOff from "./components/OnOff/OnOff";
import UnControlledAccordion from "./components/accordion/UnControlledAccordion";
import {Rating, RatingValueType} from "./components/Rating/Rating";
import Accordion from "./components/accordion/Accordion";
import ControlledOnOff from "./components/OnOff/ControlledOnOff";
import Selects from "./components/selects";
import MySelect from "./components/MySelect";
import SelectDimych from "./components/SelectDimych";
import SelectDimych2 from "./components/SelectDimych2";
import {UseMemo} from "./components/useMemo";

function App() {
    console.log("App rendering")
     let [value,  setValue] = useState<RatingValueType>(0)
     let [accordion, setAccordion] = useState<boolean>(true)
    const [on, setOn] = useState(false)
    const [parentValue, setParentValue] = useState<string | undefined>("2")
    const [valueSelect, setValueSelect]=useState(2)
    const [valueSelect2, setValueSelect2]=useState(null)

    const onChange = (e:ChangeEvent<HTMLSelectElement>) => {
        setParentValue(e.currentTarget.value)
    }
    const items=[
        {title:"IJI", value: 1},
        {title:"IO", value: 2},
        {title:"SD", value: 3},
        {title:"dtr", value: 4},
    ]
    const itemsDimych=[
        {title:"Moscow", value: 1},
        {title:"Kiev", value: 2},
        {title:"Minsk", value: 3},
    ]
    const onClickHandler=(value: any)=>{
    console.log(value)
    }
    return (
        <div>

            {/*<PageTitle title={"This is App component"}/>
            <PageTitle title={"My friends"}/>
            Article 1*/}

            <Accordion onClick={onClickHandler}
                       items={items} titleValue={"Menu"}
                       collapsed={accordion}
                       onChange={()=>{setAccordion(!accordion)}}/>
            {/*<Accordion titleValue={"Users"} collapsed={false}/>*/}
            {/*<UnControlledAccordion titleValue={"Menu"}/>*/}
            <UnControlledAccordion titleValue={"Users"}/>
            <OnOff/>
            <ControlledOnOff on={on} onClick={setOn}/>
            <Rating  value={value} onClick={setValue}/>
            <UnControlledRating/>
            <Selects value={parentValue} onChange={onChange}/>
            <MySelect items={items}/>

            <SelectDimych onChange={setValueSelect} items={itemsDimych} value={valueSelect}/>
            <SelectDimych2 onChange={setValueSelect2} items={itemsDimych} value={valueSelect2}/>

            <UseMemo/>
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
