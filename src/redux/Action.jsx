export const ActionTypes = {
    THEME_CHANGE:"THEME_CHANGE",
    SET_STORE_GIT_REPO_STATUS:"SET_STORE_GIT_REPO_STATUS"
}
export const ThemeChangeBtn = (theme) => {
    return {
        type: ActionTypes.THEME_CHANGE,
        payload: theme,
    }
}
export const setStoreGitRepoStatus = (theme) => {
    return {
        type: ActionTypes.SET_STORE_GIT_REPO_STATUS,
        payload: theme,
    }
}