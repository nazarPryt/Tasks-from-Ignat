import React, {ChangeEvent, KeyboardEvent} from 'react'
import s from './Greeting.module.css'

type GreetingPropsType = {
    name: string
    setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void
    addUser: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
    error: string
    totalUsers: number
    onEnter: (e: KeyboardEvent<HTMLInputElement>) => void
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, onEnter, totalUsers}) => {  // деструктуризация пропсов

    // const inputClass = !error ? (s.approved) : s.errorBorder;

    return (
        <div className={s.taskWrap}>
            <div className={s.inputWrap}>
                <input
                    value={name}
                    onChange={setNameCallback}
                    onKeyPress={onEnter}
                    className={name.length > 0 ? s.approved : ''}
                />
                <span className={s.error}>{error}</span>
            </div>
            <button onClick={addUser} disabled={!name}>add</button>
            <span>{totalUsers}</span>
        </div>
    )
}

export default Greeting
