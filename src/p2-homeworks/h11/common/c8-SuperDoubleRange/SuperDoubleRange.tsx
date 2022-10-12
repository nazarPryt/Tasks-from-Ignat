import React from 'react'
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
    // сделать самому, можно подключать библиотеки

    const handleChange = (event: Event, newValue: number | number[]) => {
        onChangeRange && onChangeRange(newValue as [number, number])
    }

    const styleIn = {
        width: '150px'
    }
    return (
        <>
            <Slider
                style={styleIn}
                value={value}
                onChange={handleChange}
                valueLabelDisplay="auto"
                disableSwap
                min={0}
                max={100}
            />
        </>
    )
}

export default SuperDoubleRange
