import React from 'react'
import Clock from './Clock'
import AlternativeClock from "./AlternativeClock";

function HW9() {
    return (
        <div>
            <hr/>
            <h2>homeworks 9</h2>

            {/*should work (должно работать)*/}
            <Clock/>
            <hr/>
            <hr/>
            <h2>homeworks 9 Alternative<em>(need to fix start)</em></h2>
            <AlternativeClock/>
            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeClock/>*/}
            <hr/>
        </div>
    )
}

export default HW9
