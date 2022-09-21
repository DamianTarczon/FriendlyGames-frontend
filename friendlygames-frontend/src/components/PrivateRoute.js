import { Navigate } from 'react-router-dom';

export default function PrivateRoute({children}) {
    if(!localStorage.getItem('token')) {
        return <Navigate to="/login" />
    }
    return children
}