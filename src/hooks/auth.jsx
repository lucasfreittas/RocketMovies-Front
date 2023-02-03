import { createContext, useContext, useState } from "react";
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
            }
    }

    return(
        <AuthContext.Provider value={{
            user: data.user,
            signIn,
        }}>
            {children}
        </AuthContext.Provider>
    )
};

export function useAuth(){
    const context = useContext(AuthContext);

    return context;
}