import React from 'react'
import {AffairType} from "./HW2";
import s from './Affairs.module.css'

type AffairPropsType = {
    // key не нужно типизировать
    data: AffairType
    deleteAffair: any // need to fix any
}

function Affair(props: AffairPropsType) {

    return (
        <ul>
            {props.data.map(el => {
                return (
                    <li className={s.wrapp}><span className={s.name}>{el.name}</span><span
                        className={s.priority}>{el.priority}</span>
                        <button onClick={() => {
                            props.deleteAffair(el._id)
                        }} className={s.btnX}>X
                        </button>
                    </li>
                )
            })}


        </ul>
    )
}

export default Affair
