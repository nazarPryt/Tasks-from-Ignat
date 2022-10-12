


type actionType = loadingAT
type initStateType = {isLoading: boolean}
const initState = {
    isLoading: false
}

export const loadingReducer = (state = initState, action: actionType): initStateType => {
    switch (action.type) {
        case "IS-LOADING": {
            return {...state, isLoading: !state.isLoading}
        }
        default: return state
    }
}

export const loadingAC = () => ({type: 'IS-LOADING' as const})
export type loadingAT = ReturnType<typeof loadingAC>