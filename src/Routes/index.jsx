import { useAuth } from '../hooks/auth';

import { BrowserRouter } from "react-router-dom";
import { AuthRoutes } from "./auth.routes";
import { AppRoutes } from "./app.routes";

import { useNavigate } from 'react-router-dom';

export function Routes(){
    
    const { user } = useAuth()

    function handleToken(){
        return <AuthRoutes/>
    }

    return(
        <BrowserRouter>
            { user ? <AppRoutes/> : <AuthRoutes/> }
        </BrowserRouter>
    )
}