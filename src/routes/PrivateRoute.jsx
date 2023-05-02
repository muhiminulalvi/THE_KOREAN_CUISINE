import React, { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { Children } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import BounceLoader from "react-spinners/BounceLoader";

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext)
    const location = useLocation()
    console.log(location);
    
    if(loading){
        return <div className='flex justify-center my-5'><BounceLoader color="#f59e0b" size={150}/></div>
    }

    if(user){
        return children;
    }
    return (
        <Navigate state={{from: location}} to="/login" replace></Navigate>
    );
};

export default PrivateRoute;