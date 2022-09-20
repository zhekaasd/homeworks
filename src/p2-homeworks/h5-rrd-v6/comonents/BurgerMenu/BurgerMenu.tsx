import React from 'react';
import s from "./BurgerMenu.module.css";

type BurgerMenuType = {
    value: boolean
    setValue: (value: boolean) => void
}
function BurgerMenu({value, setValue}: BurgerMenuType) {
    /*--- open closed burger menu ---*/
    const onClickHandler = () => {
        setValue(!value);
    }

    return <div onClick={onClickHandler} className={s.brg}>
        <div/>
    </div>
}

export default BurgerMenu;