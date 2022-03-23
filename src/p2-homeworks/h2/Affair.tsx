import React from 'react'
import {AffairType} from "./HW2";
import s from './Affairs.module.css'

type AffairPropsType = {
    // key не нужно типизировать
    affair: AffairType
    deleteAffairCallback: (_id: number) => void
}

function Affair(props: AffairPropsType) {
    const deleteCallback = () => {
        props.deleteAffairCallback(props.affair._id)
    }

    return (
        <div className={s.lineWrap}>
            <span>{props.affair.name}</span>
            <span>{props.affair.priority}</span>

            <button onClick={deleteCallback} className={s.btnX}>X</button>
        </div>
    )
}

export default Affair
