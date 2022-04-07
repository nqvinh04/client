import { productConstants } from "../actions/constants";

const initialState = {
    products: []
}

export default (state = initialState, action) => {
    switch(action.type){
        case productConstants.GET_ALL_PRDUCTS_SUCCESS:
            console.log('payload.products', action.payload.products)
            state = {
                ...state,
                products: action.payload.products
            }
            break;
    }
    return state;
}