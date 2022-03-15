import React from 'react'
import s from './Message.module.css'

type MessageType = {
    avatar: string
    name: string
    message: string
    time: string
}

function Message(props: MessageType) {
    return (
        <div className={s.wrapper}>
            <div className={s.avatar}><img src={props.avatar} alt="avatar"/></div>
            <div className={s.messageWrapper}>
                <div className={s.name}>{props.name}</div>
                <span className={s.message}>{props.message}</span>
                <span className={s.time}>{props.time}</span>
            </div>
        </div>
    )
}

export default Message
