import React, {ChangeEvent, DetailedHTMLProps, InputHTMLAttributes} from 'react';
import {setValueHW13AC, setValueHW13TC} from "./HW13Reducer";
import {useDispatch, useSelector} from "react-redux";
import {Root13HWReducerType} from "./storHM13";

type defaultInputTypes = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

type propsType = defaultInputTypes & {}

const RequestComponent = (props: propsType) => {

    const value = useSelector<Root13HWReducerType, boolean>(state => state.checkboxValue.value)
    const dispatch = useDispatch()


    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(setValueHW13AC(e.currentTarget.checked))
    }
    const onClickHandler = () => {
        setValueHW13TC(value)
    }
    return (
        <div>
            <input type="checkbox" checked={value} onChange={onChangeHandler}/>
            <button onClick={onClickHandler}>Send Request</button>
        </div>
    );
};

export default RequestComponent;