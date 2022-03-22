import React from 'react'
import {AffairType} from "./HW2";
import s from './Affairs.module.css'

type AffairPropsType = {
    data: AffairType
    deleteAffair: (_id: number) => void
}

function Affair(props: AffairPropsType) {

    return (
        <ul>
            {props.data.map(el => {
                return (
                    <li key={el._id} className={s.wrapp}><span className={s.name}>{el.name}</span><span
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
