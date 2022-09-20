import React from 'react'

import s from "./Error404.module.css";
import img from "../../assets/images/travolta.gif";
import { NavLink } from 'react-router-dom';
import AlternativeSuperButton from "../../../h4/common/c2-SuperButton/Alternative/AlternativeSuperButton";

function Error404() {
    return (
        <div className={s.wrapper}>
            <h1>404</h1>
            <h3>Page not found!</h3>
            <img src={img} alt="error"/>
            <NavLink to={'/'}>
                <AlternativeSuperButton> GO TO HOMEPAGE </AlternativeSuperButton>
            </NavLink>
        </div>
    )
}

export default Error404;
