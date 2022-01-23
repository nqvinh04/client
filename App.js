import './App.css';
// import Layout from './components/Layout/index';
import Home from './containers/Home/home';
import SignIn from './containers/Signin/signin';
import SignUp from './containers/Signup/signup';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
 
function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route path="/" exact element={<Home/>} />
                    <Route path="/signin" element={<SignIn/>} />
                    <Route path="/signup" element={<SignUp/>} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;