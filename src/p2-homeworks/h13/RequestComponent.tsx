import React, {ChangeEvent} from 'react';
import {setValueHW13AC, setValueHW13TC} from "./HW13Reducer";
import {useSelector} from "react-redux";
import {Root13HWReducerType} from "./storHM13";
import {useAppDispatch} from "./hooks";


const RequestComponent = () => {

    const value = useSelector<Root13HWReducerType, boolean>(state => state.checkboxValue.value)
    const dispatch = useAppDispatch()


    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(setValueHW13AC(e.currentTarget.checked))
    }
    const onClickHandler = () => {
        dispatch(setValueHW13TC(value))
    }
    return (
        <div>
            <input type="checkbox" checked={value} onChange={onChangeHandler}/>
            <button onClick={onClickHandler}>Send Request</button>
        </div>
    );
};

export default RequestComponent;