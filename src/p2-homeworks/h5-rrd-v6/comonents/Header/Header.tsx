import React from 'react'
import s from "./Header.module.css";
import BurgerMenu from "../BurgerMenu/BurgerMenu";
import AlternativeSuperButton from "../../../h4/common/c2-SuperButton/Alternative/AlternativeSuperButton";

type HeaderPropsType = {
    isTrue: boolean
    changeIsTrue: (value: boolean) => void
}
function Header({isTrue, changeIsTrue}: HeaderPropsType) {
    return (
        <div className={s.header}>

            <div style={{display: 'flex'}}>
                <h3>ADD <span>NavLinks</span></h3>
                <BurgerMenu value={isTrue} setValue={changeIsTrue} />
            </div>
            <AlternativeSuperButton className={s.btn}>LOGIN</AlternativeSuperButton>
        </div>
    )
}

export default Header
