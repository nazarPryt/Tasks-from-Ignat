import {Dispatch} from "redux";
import {RequestsAPI} from "./RequestsAPI";



type stateHW13Type = {
    value: boolean
}
type actionType =
    | ReturnType<typeof setValueHW13AC>
const initialState:stateHW13Type = {value: false}

export const HW13Reducer = (state: stateHW13Type = initialState, action: actionType): stateHW13Type => {
    switch (action.type) {
        case "HW13Reducer/SET-VALUE-TYPE":
            return {...state, value: action.value}
        default:
        return {...state}
    }
    return state
}

export const setValueHW13AC = (value: boolean) => ({type: 'HW13Reducer/SET-VALUE-TYPE' as const, value})

export const setValueHW13TC = (value: boolean) => async (dispatch: Dispatch) => {
    try {
        const res = await RequestsAPI.makeRequest(value)
        console.log(res)
    } catch (e) {
        console.log(e);
    }

}