/* eslint-disable */
import { ActionTypes } from "./Action";

const initailData = {
    access_token: "",
    userLogin:{
        email:"user@gmail.com",
        password:"user123",
    },
    contributions:[]
}

export const chatReducers = (state = initailData, action) => {
    let url = window.location.pathname;
    let location_id = url.substring(url.lastIndexOf('/') + 1);
    switch(action.type) {
        case ActionTypes.USER_ID :
            return { ...state, user_id : action.payload };
        case ActionTypes.SET_STORE_GIT_REPO_STATUS:
            return{
                ...state,
                contributions:action?.payload
            }
        default:
            return state;
    }
}