import React, {useEffect, useState} from 'react'

function AlternativeClock() {

    const [date, setDate] = useState(new Date())
    const [showDay, setShowDay] = useState<boolean>(false)
    const [intervalID, setIntervalID] = useState<number>(0)



    useEffect(() => {
        const intervalID = setInterval(() => {
            setDate(new Date())
            setIntervalID(+intervalID)
        }, 1000)
        return () => {
            clearInterval(intervalID)

        }
    }, [])

    const onStartHandler = () => {
        setDate(new Date())      // doesnt work((
    }
    const onStopHandler = () => {
        clearInterval(intervalID)
    }
    return (
        <div>
            {date.toLocaleTimeString()}
            {showDay
                ? <div onMouseLeave={()=>setShowDay(false)}>{date.toLocaleDateString()}</div>
                : <div onMouseEnter={()=>setShowDay(true)}>Day</div>}
            <div>
                <button onClick={onStartHandler}>start</button>
                <button onClick={onStopHandler}>stop</button>
            </div>
        </div>
    )
}

export default AlternativeClock
