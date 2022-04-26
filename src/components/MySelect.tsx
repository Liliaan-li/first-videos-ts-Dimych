import React, {useState} from 'react';

type ItemType = {
    title: string
    value: any
}

type SelectTitlePropsType={
    collapsed: boolean
    onChange:(collapsed: boolean)=>void
    onTitleClick:(value:any)=>void
    items: ItemType[]
    title: string
}
const SelectTitle=({collapsed, onChange, items, onTitleClick, title}:SelectTitlePropsType)=>{
    let collapsedItems= (!collapsed) ? <div>{items.map(el=><div key={el.value} onClick={()=>{onTitleClick(el.title)}} >{el.title}</div>)}</div> : <></>
    let onChangeHandler=()=>{
        onChange(collapsed)
    }
    return (<>
    <div onClick={onChangeHandler} >{title}</div>
        <div>{collapsedItems}</div>
    </>)
}

type SelectPropsType = {
    items: ItemType[]
}
const MySelect = ({items}: SelectPropsType) => {
    let [collapsed, setCollapsed] = useState<boolean>(true)
    let [title, setTitle] = useState<string>("Значение")
    const onClickHandler=(collapsed: boolean)=>{
        setCollapsed(!collapsed)
    }
    const onTitleClick=(value:string)=>{
        setTitle(value)
        setCollapsed(!collapsed)
    }
    return (
        <div>
            <SelectTitle collapsed={collapsed} onChange={onClickHandler} items={items} onTitleClick={onTitleClick} title={title}/>
        </div>
    );
};

export default MySelect;