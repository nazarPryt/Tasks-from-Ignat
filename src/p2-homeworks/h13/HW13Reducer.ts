import {RequestsAPI} from "./RequestsAPI";
import {App13HWThunkType} from "./storHM13";



type stateHW13Type = {
    value: boolean
}
export type action13HWReducerType =
    | ReturnType<typeof setValueHW13AC>
const initialState:stateHW13Type = {value: false}

export const HW13Reducer = (state: stateHW13Type = initialState, action: action13HWReducerType): stateHW13Type => {
    switch (action.type) {
        case "HW13Reducer/SET-VALUE-TYPE":
            return {...state, value: action.value}
        default:
        return {...state}
    }
}

export const setValueHW13AC = (value: boolean) => ({type: 'HW13Reducer/SET-VALUE-TYPE' as const, value})

export const setValueHW13TC = (value: boolean): App13HWThunkType => async dispatch => {
    try {
        const res = await RequestsAPI.makeRequest(value)
        alert(res.data.errorText)
    } catch (error: any) {
        console.log({...error});
        console.log(error.response ? error.response.data.errorText : error.message);
    }

}