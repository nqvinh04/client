import { authConstants } from "./constants";

export const login = (user) => {

    console.log('user', user);

    return (dispatch) => {
        dispatch({
            type: authConstants.LOGIN_REQUEST,
            payload: {
                ...user
            }
        });
    }
}