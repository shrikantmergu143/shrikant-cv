export const ActionTypes = {
    THEME_CHANGE:"THEME_CHANGE"
}
export const ThemeChangeBtn = (theme) => {
    return {
        type: ActionTypes.THEME_CHANGE,
        payload: theme,
    }
}