import authReducer from "./auth.reducers";
import categoryReducer from "./category.reducers";
import { combineReducers } from 'redux';
import productReducers from "./product.reducers";


const rootReducer = combineReducers({
    auth: authReducer,
    categories: categoryReducer,
    product: productReducers
});

export default rootReducer;