import React, {useState} from 'react'
import {Slider} from "@mui/material";

type SuperDoubleRangePropsType = {
    onChangeRange?: (value: [number, number]) => void
    value?: [number, number]

    // min, max, step, disable, ...
}

const SuperDoubleRange: React.FC<SuperDoubleRangePropsType> = (
    {
        onChangeRange, value,
        // min, max, step, disable, ...
    }
) => {

    const [newValue, setNewValue] = useState <number[]>([20, 40])
    // сделать самому, можно подключать библиотеки

    const handleChange = (event: Event, newValue: number | number[]) => {
        setNewValue(newValue as number[])
    }


    return (
        <>
            <Slider
                getAriaLabel={() => 'Temperature range'}
                value={value}
                onChange={handleChange}
                valueLabelDisplay="auto"
            />
        </>
    )
}

export default SuperDoubleRange
