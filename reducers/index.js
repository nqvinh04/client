import authReducer from "./auth.reducers";
import categoryReducer from "./category.reducers";
import { combineReducers } from 'redux';


const rootReducer = combineReducers({
    auth: authReducer,
    categories: categoryReducer
});

export default rootReducer;