import { Routes, Route, useNavigate } from 'react-router-dom'
import { SignIn } from '../Pages/SingIn';
import { SignUp } from '../Pages/SingUp';

export function AuthRoutes(){


    return(
        <Routes>
            <Route path='/' element={<SignIn/>}/>
            <Route path='/signup' element={<SignUp/>}/>
        </Routes>
    )
}