import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux'
import {App13HWDispatchType, Root13HWReducerType} from "./storHM13";


// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch: () => App13HWDispatchType = useDispatch
export const useAppSelector: TypedUseSelectorHook<Root13HWReducerType> = useSelector