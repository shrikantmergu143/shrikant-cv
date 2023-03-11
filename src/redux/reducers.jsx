/* eslint-disable */
import { ActionTypes } from "./Action";

const initailData = {
    access_token: "",
    userLogin:{
        email:"user@gmail.com",
        password:"user123",
    }
}

export const chatReducers = (state = initailData, action) => {
    let url = window.location.pathname;
    let location_id = url.substring(url.lastIndexOf('/') + 1);
    switch(action.type) {
        case ActionTypes.USER_ID :
            return { ...state, user_id : action.payload };
        default:
            return state;
    }
}