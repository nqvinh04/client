import { authConstants } from "../actions/constants";

const initState = {
    name: 'vinh',
};

export default (state = initState, action) => {

    console.log('action', action);

    switch(action.type){
        case authConstants.LOGIN_REQUEST:
            state = {
                ...state,
                ...action.payload
            }
            break;
    }

    return state;
}