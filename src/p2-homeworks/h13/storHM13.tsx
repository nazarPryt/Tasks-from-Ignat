import {applyMiddleware, combineReducers, legacy_createStore as createStore} from "redux";
import {HW13Reducer} from "./HW13Reducer";

const Root13HWReducer = combineReducers({
    checkboxValue: HW13Reducer
})


export const storeHW13 = createStore(Root13HWReducer, applyMiddleware())


export type Root13HWReducerType = ReturnType<typeof Root13HWReducer>