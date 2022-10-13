import {combineReducers, legacy_createStore as createStore} from 'redux'
import {themeReducer} from "./themeReducer";

const RootReducer = combineReducers({
        theme: themeReducer
})

export const store = createStore(RootReducer)

type RootReducerType = ReturnType<typeof RootReducer>