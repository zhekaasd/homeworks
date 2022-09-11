import React from 'react'
import {AffairType, FilterType} from "./HW2";
import styles from "./AlternativeAffair.module.css";
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
        return styles.affair + (props.affair.priority === priority ? ' ' + styles[priority] : '')
    }


    return <div className={styles.affair + ' ' + setClass(props.affair.priority)}>
            <span className={styles.title}>{props.affair.name.toUpperCase()}</span>
            <button className={styles.btn} onClick={deleteCallback}>
                <img className={styles.icon} src={iconDelete} alt=""/>
            </button>
        </div>
}

export default Affair
