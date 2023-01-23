import { Routes, Route } from "react-router-dom";

import { Home } from '../Pages/Home';
import { SignIn } from '../Pages/SingIn';
import { SignUp } from '../Pages/SingUp';

export function AppRoutes(){
    return(
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/signin' element={<SignIn/>} />
            <Route path='/signup' element={<SignUp/>} />
        </Routes>
    )
}