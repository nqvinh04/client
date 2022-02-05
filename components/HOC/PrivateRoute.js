import React from "react";
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Navigate, Outlet } from "react-router-dom";


const PrivateRoute = () => {
    const token = window.localStorage.getItem('token');

    return token ? <Outlet /> : <Navigate to={`/signin`}/>;
}

export default PrivateRoute;