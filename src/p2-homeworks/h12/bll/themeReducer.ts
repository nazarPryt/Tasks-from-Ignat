

type actionType = changeThemeAT
export type stateType = 'dark'| 'red'| 'some';

const initState: stateType = 'dark';

export const themeReducer = (state:stateType = initState, action: actionType): stateType => { // fix any
    switch (action.type) {
        case "CHANGE-THEME": {
            return state = action.theme;
        }
        default: return state;
    }
};

export const changeThemeAC = (theme: stateType) => ({type: 'CHANGE-THEME' as const, theme}); // fix any
 type changeThemeAT = ReturnType<typeof changeThemeAC>