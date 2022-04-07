import './App.css';
// import Layout from './components/Layout/index';
import Home from './containers/Home/home';
import SignIn from './containers/Signin/signin';
import SignUp from './containers/Signup/signup';
import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import PrivateRoute from './components/HOC/PrivateRoute';
import {isUserLoggendIn} from './actions/auth.actions';
import { useDispatch, useSelector } from 'react-redux';
import Products from './containers/Products/products';
import Orders from './containers/Orders/orders';
import Category from './containers/Category/category';
import { getInitialData } from './actions/initialData.action';
 
function App() {

    const dispatch = useDispatch();
    const auth = useSelector(state => state.auth);    

    useEffect(() => {
        if(!auth.authenticate){
            dispatch(isUserLoggendIn());
        }
        dispatch(getInitialData())
    },[]);

    return (
        <div className="App">
            <Routes>
                <Route exact path='/' element={<PrivateRoute/>}>
                    <Route exact path='/' element={<Home/>}/>
                </Route>
                <Route exact path='/categories' element={<PrivateRoute/>}>
                    <Route exact path='/categories' element={<Category/>}/>
                </Route>
                <Route exact path='/products' element={<PrivateRoute/>}>
                    <Route exact path='/products' element={<Products/>}/>
                </Route>
                <Route exact path='/orders' element={<PrivateRoute/>}>
                    <Route exact path='/orders' element={<Orders/>}/>
                </Route>
                {/* <PrivateRoute exact path='/' element={<Home/>}/> */}
                <Route path="/signin" element={<SignIn/>} />
                <Route path="/signup" element={<SignUp/>} />
            </Routes>
        </div>  
    );
}

export default App;