import React from 'react'
import {AffairType, FilterType} from "../HW2";
import s from "./AlternativeAffairs.module.css";
import AlternativeAffair from "./AlternativeAffair";

type AlternativeAffairsType = {
    data: AffairType[]
    setFilter: (value: FilterType) => void
    deleteAffairCallback: (_id: number) => void
    filter: FilterType
}
function AlternativeAffairs(props: AlternativeAffairsType) {



    const setPriority = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      props.setFilter(e.currentTarget.value as FilterType);
    }

    const setClass = (filter: FilterType) => {
        return s.btn + (props.filter === filter ? ' ' + s[filter] : '');
    }

    return <div className={s.wrapper}>
        {
            props.data.map((a: AffairType) => <AlternativeAffair // should work
                    key={a._id} // кеи ОБЯЗАТЕЛЬНЫ в 99% - так что лучше их писать всегда при создании компонент в мапе
                    affair={a}
                    deleteAffairCallback={props.deleteAffairCallback}
                />)
        }

        <div className={s.sortButton}>
            <button className={setClass('all')} onClick={setPriority} value={'all'} >All</button>
            <button className={ s.hoverHigh + ' ' + setClass('high') } onClick={setPriority} value={'high'} >High</button>
            <button className={ s.hoverMiddle + ' ' + setClass('middle')} onClick={setPriority} value={'middle'} >Middle</button>
            <button className={ s.hoverLow + ' ' + setClass('low')} onClick={setPriority} value={'low'} >Low</button>
        </div>
    </div>
}

export default AlternativeAffairs
