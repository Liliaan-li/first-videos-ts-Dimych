import React, {useState} from 'react';
import styles from './SelectDimych.module.css'

type ItemType = {
    title: string
    value: any
}

type SelectPropsType = {
    items: ItemType[]
    onChange: (value: any) => void
    value: any
}
const SelectDimych2 = ({items, onChange, value}: SelectPropsType) => {
    const [active, setActive] = useState(false)
    const onClickHandler = () => {
        setActive(!active)
    }
    const onItemClick=(value:any)=>{
        onChange(value)
        onClickHandler()
    }
    const selectedItem = items.find(el => el.value === value)

    return (
        <>
            <div>----------------------------------------------------------------------------------</div>
            <div className={styles.select}>
                <span className={styles.main} onClick={onClickHandler}>{selectedItem && selectedItem.title}</span>
                {active &&
                    <div className={styles.items}>
                        {items.map(el => <div key={el.value} onClick={()=>onItemClick(el.value)}>{el.title}
                        </div>)}
                    </div>}

            </div>
        </>

    );
};

export default SelectDimych2;