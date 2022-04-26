import React, {ChangeEvent} from 'react';
type SelectType={
    value: string | undefined
    onChange: (e:ChangeEvent<HTMLSelectElement>)=>void
}
const Selects = (props: SelectType)=>{

    return(<select value={props.value} onChange={props.onChange}>
        <option>none</option>
        <option value="1">fj</option>
        <option value="2">fd</option>
        <option value="3">we</option>
    </select>)
}

export default Selects;