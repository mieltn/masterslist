import { useContext } from 'react';
import { Outlet, Navigate } from 'react-router-dom'
import AuthContext from '../context/AuthContext';

const PrivateRoutes = ({ children }) => {
    console.log('PrivateRoute');
    let {user} = useContext(AuthContext);

    return (
        user ? <Outlet /> : <Navigate to='/login' />
    )
}

export default PrivateRoutes;