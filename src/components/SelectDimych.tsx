import React, { useEffect, useState} from 'react';
import styles from './SelectDimych.module.css'

type ItemType = {
    title: string
    value: any
}

type SelectPropsType = {
    value: any
    items: ItemType[]
    onChange: (value: any) => void
}
const SelectDimych = ({items, onChange, value}: SelectPropsType) => {
    const [active, setActive] = useState(false)
    const [hover, setHover] = useState(value)

    const onClickHandler = () => {
        setActive(!active)
    }
    const onItemClick = (value: any) => {
        onChange(value)
        onClickHandler()
    }

    const selectedItem = items.find(el => el.value === value)
    const hoveredItem = items.find(el => el.value === hover)

    useEffect(() => {
        setHover(value)
    }, [value])
    // const onKeyUp = (e: KeyboardEvent<HTMLDivElement>) => {
    //     if (e.key === "ArrowDown" || e.key === "ArrowDown") {
    //         for (let i = 0; i < items.length; i++) {
    //             if (items[i].value === hover) {
    //                 const next =e.key === "ArrowDown" ? items[i+1] : items[i-1]
    //                 if (next) {
    //                     onChange(next.value)
    //                     return;
    //                 }
    //             }
    //         }
    //     }
    // }
    return (
        <>
            <div>----------------------------------------------------------------------------------</div>
            <div className={styles.select}  tabIndex={0}>
                <span className={styles.main} onClick={onClickHandler}>{selectedItem && selectedItem.title}</span>
                {active &&
                    <div className={styles.items}>
                        {items.map(el => <div key={el.value}
                                              className={styles.item + " " + (hoveredItem === el ? styles.selected : " ")}
                                              onClick={() => onItemClick(el.value)}
                                              onMouseEnter={() => {
                                                  setHover(el.value)
                                              }}
                        >{el.title}
                        </div>)}
                    </div>}

            </div>
        </>

    );
};

export default SelectDimych;