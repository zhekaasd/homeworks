import React from 'react';
import {NavLink} from 'react-router-dom';
import s from "./Sidebar.module.css";

type SidebarPropsType = {
    isTrue:  boolean
    changeIsTrue: (value: boolean) => void
    data: Array<{id: string, nameLink: string, path: string, icon: string}>
}
function Sidebar({isTrue, changeIsTrue, data}: SidebarPropsType) {


    const setClass = (path: boolean) => {
       return path ? s.active : '';
    }

    const onMouseHandler = (value: boolean) => {
        changeIsTrue(!value)
    }

    return (
        <div
            onMouseOver={() => onMouseHandler(isTrue)}
            onMouseOut={() => onMouseHandler(isTrue)}
            className={ isTrue ?  s.sidebar : s.sidebarClosed}
        >
            {
                data.map((item) => <NavLink

                    key={item.id}
                    className={({isActive}) => s.navItem + ' ' + setClass(isActive)}
                    to={item.path}
                >
                    <img src={item.icon} alt=""/>
                    <span>{item.nameLink}</span>
                </NavLink>)
            }

        </div>
    );
}

export default Sidebar;