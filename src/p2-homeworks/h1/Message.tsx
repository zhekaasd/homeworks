import React from 'react';
import styles from './Message.module.css';

type MessagePropsType = {
    avatar: string
    name: string
    message: string
    time: string
}

function Message(props: MessagePropsType) {
    return (
        <div className={styles.wrapperMessage}>
            <img src={props.avatar} alt="avatar"/>
            <div className={styles.message}>
                <div className={styles.messageInner}>
                    <h4>{props.name}</h4>
                    <p>{props.message}</p>
                </div>
                <span className={styles.time}>
                    {props.time}
                </span>
            </div>
        </div>
    )
}

export default Message
