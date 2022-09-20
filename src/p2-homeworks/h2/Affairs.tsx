import React from 'react'
import Affair from './Affair'
import {AffairType, FilterType} from './HW2'
import AlternativeSuperButton from "../h4/common/c2-SuperButton/Alternative/AlternativeSuperButton";

import s from "./Affairs.module.css"

type AffairsPropsType = { // need to fix any
    data: AffairType[]
    setFilter: (value: FilterType) => void
    deleteAffairCallback: (_id: number) => void
    filter: FilterType
}

function Affairs(props: AffairsPropsType) {
    const mappedAffairs = props.data.map((a: AffairType) => (
        <Affair // should work
            key={a._id} // кеи ОБЯЗАТЕЛЬНЫ в 99% - так что лучше их писать всегда при создании компонент в мапе
            affair={a}
            deleteAffairCallback={props.deleteAffairCallback}
        />
    ))

    const setFilter = (value: FilterType) => { props.setFilter(value) }

    return (
        <div>

            {mappedAffairs}

            <AlternativeSuperButton className={props.filter === 'all' ? s.active : ''} onClick={() => setFilter('all')}>All</AlternativeSuperButton>
            <AlternativeSuperButton className={props.filter === 'high' ? s.active : ''} onClick={() => setFilter('high')}>High</AlternativeSuperButton>
            <AlternativeSuperButton className={props.filter === 'middle' ? s.active : ''} onClick={() => setFilter('middle')}>Middle</AlternativeSuperButton>
            <AlternativeSuperButton className={props.filter === 'low' ? s.active : ''} onClick={() => setFilter('low')}>Low</AlternativeSuperButton>
        </div>
    )
}

export default Affairs
