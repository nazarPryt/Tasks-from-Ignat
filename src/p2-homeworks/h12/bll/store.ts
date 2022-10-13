import {combineReducers, legacy_createStore as createStore} from 'redux'
import {themeReducer} from "./themeReducer";

const RootReducer = combineReducers({
        theme: themeReducer
})

export const store = createStore(RootReducer)

export type RootReducerType = ReturnType<typeof RootReducer>

// @ts-ignore
window.store = store