import {UserType} from "../HW8";

export type actionType = sortUpAT | sortDownAT | check18AT
export const homeWorkReducer = (state: UserType[], action: actionType): UserType[] => {
    switch (action.type) {
        case "SORT-UP": {
            return [...state.sort((user1, user2) => user1.name > user2.name ? 1 : -1)]
        }
        case 'SORT-DOWN': {
            return [...state.sort((user1, user2) => user1.name < user2.name ? 1 : -1)]
        }
        case 'CHECK-18': {
            console.log('check')
            return [...state.filter(user => user.age > 18)]
        }
        default:
            return state
    }
}

export const sortUpAC = () => ({type: 'SORT-UP' as const})
type sortUpAT = ReturnType<typeof sortUpAC>
export const sortDownAC = () => ({type: 'SORT-DOWN' as const})
type sortDownAT = ReturnType<typeof sortDownAC>
export const check18AC = () => ({type: 'CHECK-18' as const})
type check18AT = ReturnType<typeof check18AC>