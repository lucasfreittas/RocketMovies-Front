import { useAuth } from "../../hooks/auth";
import { api } from '../../services/axios';

import { Container, Profile } from "./styles";

import { Input } from "../Input";
import { Link, useNavigate } from 'react-router-dom' 
import {FiSearch} from 'react-icons/fi'

import placeholderAvatar from '../../Assets/placeholderAvatar.svg'


export function Header(){
    const { user, logOut } = useAuth();
    const navigate = useNavigate()
    const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : placeholderAvatar;

    function handleLogout(){
        logOut();
        navigate('/')
    }

    return(
        <Container>
            <Link to='/'>
                <h1>RocketMovies</h1>
            </Link>

            <Input icon={FiSearch} placeholder='Pesquisar pelo título'/>

            <Profile>
                <div>
                    <strong>{user.name}</strong>
                    <button onClick={handleLogout}>sair</button>
                </div>
                <Link to='/profile'>
                    <img src={avatarUrl} alt="Foto do Usuário" />
                </Link>
           </Profile>
        </Container>
    )
}