import React, { createContext } from "react";

export const AuthContext = createContext();

export const authReducer = (prevState, action) => {
    switch (action.type) {
        case 'RESTORE_TOKEN':
        return {
            ...prevState,
            userToken: action.token,
            isLoading: false,
        };
        case 'SIGN_IN':
        return {
            ...prevState,
            isLoading: false,
            isSignout: false,
            userToken: action.token,
        };
        case 'SIGN_OUT':
        return {
            ...prevState,
            isSignout: true,
            userToken: null,
        };
        case 'SET_LOADING':
        return {
            ...prevState,
            isLoading: !(prevState.isLoading)
        };
        default:
        return {
            ...prevState,
            isSignout: true,
            userToken: false,
        };
    };
}
