import { Routes, Route, useNavigate } from 'react-router-dom'
import { SignIn } from '../Pages/SingIn';
import { SignUp } from '../Pages/SingUp';
import { useEffect } from 'react';

export function AuthRoutes(){
    const navigate = useNavigate()

    useEffect(() => {
        navigate('/')
    }, [])
    return(
        <Routes>
            <Route path='/' element={<SignIn/>}/>
            <Route path='/signup' element={<SignUp/>}/>
        </Routes>
    )
}