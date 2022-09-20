import React from 'react'
import {AffairType} from "./HW2";
import AlternativeSuperButton from "../h4/common/c2-SuperButton/Alternative/AlternativeSuperButton";

type AffairPropsType = {
    // key не нужно типизировать
    affair: AffairType // need to fix any
    deleteAffairCallback: (_id: number) => void // need to fix any
}

function Affair(props: AffairPropsType) {
    const deleteCallback = () => {
        props.deleteAffairCallback(props.affair._id);
    }

    return (
        <div>
            <span style={{display: "inline-block", marginBottom: '10px'}}>{props.affair.name} - {props.affair.priority}</span>
            <AlternativeSuperButton remove onClick={deleteCallback}>X</AlternativeSuperButton>
        </div>
    )
}

export default Affair
