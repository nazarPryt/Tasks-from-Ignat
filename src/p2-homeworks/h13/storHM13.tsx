import {applyMiddleware, combineReducers, legacy_createStore as createStore} from "redux";
import {action13HWReducerType, HW13Reducer} from "./HW13Reducer";
import thunk, {ThunkAction, ThunkDispatch} from "redux-thunk";

const Root13HWReducer = combineReducers({
    checkboxValue: HW13Reducer
})


export const storeHW13 = createStore(Root13HWReducer, applyMiddleware(thunk))


export type Root13HWReducerType = ReturnType<typeof Root13HWReducer>

export type App13HWActionsType = action13HWReducerType
export type App13HWDispatchType = ThunkDispatch<Root13HWReducerType, unknown, App13HWActionsType>
export type App13HWThunkType<ReturnType = void> = ThunkAction<ReturnType, Root13HWReducerType, unknown, App13HWActionsType>