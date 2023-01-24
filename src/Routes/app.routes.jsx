import { Routes, Route } from "react-router-dom";

import { Home } from '../Pages/Home';
import { Profile } from '../Pages/Profile';
import { SignIn } from '../Pages/SingIn';
import { SignUp } from '../Pages/SingUp';
import { CreateNote } from '../Pages/CreateNote';
import { Note } from '../Pages/Note';

export function AppRoutes(){
    return(
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/signin' element={<SignIn/>} />
            <Route path='/signup' element={<SignUp/>} />
            <Route path='/profile' element={<Profile/>} />
            <Route path='/createnote' element={<CreateNote/>} />
            <Route path='/note/:id' element={<Note/>} />
        </Routes>
    )
}