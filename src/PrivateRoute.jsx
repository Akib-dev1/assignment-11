import React, { use } from 'react';
import { Navigate, useLocation } from 'react-router';
import { AuthContext } from './AuthProvidor';

const PrivateRoute = ({children}) => {
    const {user,loading} = use(AuthContext);
    const {pathname}=useLocation();
    if(loading){
        return <div className="flex justify-center items-center h-screen"><span className="loading loading-bars loading-xl mx-auto"></span></div>;
    }
    if(user){
        return children;
    }
    return <Navigate state={pathname} to="/login"></Navigate>;
};

export default PrivateRoute;