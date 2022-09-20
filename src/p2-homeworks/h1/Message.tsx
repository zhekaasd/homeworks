import React from 'react';
import s from './Message.module.css';

type MessagePropsType = {
    avatar: string
    name: string
    message: string
    time: string
}

function Message(props: MessagePropsType) {
    return (
        <div className={s.wrapperMessage}>
            <img src={props.avatar} alt="avatar"/>
            <div className={s.message}>
                <div className={s.messageInner}>
                    <h4>{props.name}</h4>
                    <p>{props.message}</p>
                </div>
                <span className={s.time}>
                    {props.time}
                </span>
            </div>
        </div>
    )
}

export default Message
