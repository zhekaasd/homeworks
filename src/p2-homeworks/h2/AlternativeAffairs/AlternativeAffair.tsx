import React from 'react'
import {AffairType, FilterType} from "../HW2";
import s from "./AlternativeAffair.module.css";
import iconDelete from './images/trash-solid.svg';

type AffairPropsType = {
    // key не нужно типизировать
    affair: AffairType // need to fix any
    deleteAffairCallback: (_id: number) => void // need to fix any
}

function Affair(props: AffairPropsType) {
    const deleteCallback = () => {
        props.deleteAffairCallback(props.affair._id);
    }

    function setClass(priority: FilterType) {
        return s.affair + (props.affair.priority === priority ? ' ' + s[priority] : '')
    }


    return <div className={s.affair + ' ' + setClass(props.affair.priority)}>
            <span className={s.title}>{props.affair.name.toUpperCase()}</span>
            <div className={s.removeIcon}>
                <img onClick={deleteCallback} className={s.icon} src={iconDelete} alt=""/>
            </div>
        </div>
}

export default Affair
