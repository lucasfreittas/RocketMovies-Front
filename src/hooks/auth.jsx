import { createContext, useContext, useEffect, useState } from "react";
import { api } from '../services/axios';

export const AuthContext = createContext({});

export function AuthProvider({ children }) {

    const [data, setData] = useState({});

    async function signIn({email, password}){

        try{
            const response = await api.post('/sessions', {email, password});
            const { user, token } = response.data
            
            localStorage.setItem('@rocketflix:user', JSON.stringify(user));
            localStorage.setItem('@rocketflix:token', token);

            api.defaults.headers.common['Authorization'] = `Bearer ${token}`

            setData({user, token})

            } catch (error) {
                if(error.response){
                    alert(error.response.data.message);
                } else {
                    alert('Não foi possível entrar');
                }
            };
    };

    async function updateUser({user, avatarFile}){

        if(avatarFile){
            const fileUploadForm = new FormData();
            fileUploadForm.append('avatar', avatarFile);

            const response = await api.patch('/user/avatar', fileUploadForm);
            user.avatar = response.data.avatar
        }

        try{
            await api.put('/user', user);

            localStorage.setItem('@rocketflix:user', JSON.stringify(user));
            setData({user, token: user.token})

            alert('Perfil Atualizado!')

        } catch(error) {
            
            if(error.response){
                alert(error.response.data.message);
            } else {
                alert('Não foi possível alterar a senha')
            }
        } 
    };

    async function logOut(){
        localStorage.removeItem('@rocketflix:user');
        localStorage.removeItem('@rocketflix:token');

        setData({})
    };

    useEffect(() => {
        const token = localStorage.getItem('@rocketflix:token');
        const user = localStorage.getItem('@rocketflix:user');

        if(token && user){
            api.defaults.headers.common['Authorization'] = `Bearer ${token}`;

            setData({token, user: JSON.parse(user)})
        }
    }, [])

    return(
        <AuthContext.Provider value={{
            user: data.user,
            signIn,
            logOut,
            updateUser,
        }}>
            {children}
        </AuthContext.Provider>
    )
};

export function useAuth(){
    const context = useContext(AuthContext);

    return context;
}