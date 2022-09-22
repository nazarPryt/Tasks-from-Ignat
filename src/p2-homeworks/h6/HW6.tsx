import React, {useState} from 'react'
import SuperEditableSpan from './common/c4-SuperEditableSpan/SuperEditableSpan'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import {restoreState, saveState} from './localStorage/localStorage'
import s from './HW6.module.css'

function HW6() {
    const [value, setValue] = useState<string>('')

    const save = () => {
        saveState('editable-span-value', value)
        alert('changes ware saved !!!')
    }
    const restore = () => {
        let val = restoreState('editable-span-value')
        if (val){
            setValue(val)
        }
    }

    return (
        <div>
            <hr/>
            <hr/>
            <hr/>
            homeworks 6

            <div>
                <SuperEditableSpan
                    value={value}
                    onChangeText={setValue}
                    spanProps={{children: value ? undefined : 'enter text...'}}
                />
            </div>
            <SuperButton className={s.Button} onClick={save}>Save</SuperButton>
            <SuperButton className={s.Button} onClick={restore}>Restore</SuperButton>

            <hr/>
            <hr/>
            <hr/>
        </div>
    )
}

export default HW6
