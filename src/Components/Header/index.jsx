import { Container, Profile } from "./styles";
import { Input } from "../Input";
import { Link } from 'react-router-dom' 
import {FiSearch} from 'react-icons/fi'


export function Header(){
    return(
        <Container>
            <Link to='/'>
                <h1>RocketMovies</h1>
            </Link>

            <Input icon={FiSearch} placeholder='Pesquisar pelo título'/>

            <Profile>
                <div>
                    <strong>Lucas de Freitas</strong>
                    <button>sair</button>
                </div>
                <Link to='/profile'>
                    <img src="http://github.com/lucasfreittas.png" alt="Foto do Usuário" />
                </Link>
           </Profile>
        </Container>
    )
}