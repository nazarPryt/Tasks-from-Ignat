import React from 'react'
import Affair from './Affair'
import {AffairType, DataType} from './HW2'

type AffairsPropsType = { // need to fix any
    data: AffairType
    setFilter: any
    deleteAffair: any
}

function Affairs(props: AffairsPropsType) {


    const setAll = () => {
    } // need to fix
    const setHigh = () => {
    }
    const setMiddle = () => {
    }
    const setLow = () => {
    }

    return (
        <div>

            <Affair
                data={props.data}
                deleteAffair={props.deleteAffair}
            />

            <button onClick={setAll}>All</button>
            <button onClick={setHigh}>High</button>
            <button onClick={setMiddle}>Middle</button>
            <button onClick={setLow}>Low</button>
        </div>
    )
}

export default Affairs
