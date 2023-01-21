import { Container, Profile } from "./styles";
import { Input } from "../Input";

import {FiSearch} from 'react-icons/fi'


export function Header(){
    return(
        <Container>
            <h1>RocketMovies</h1>

            <Input icon={FiSearch} placeholder='Pesquisar pelo título'/>

            <Profile>
                <div>
                    <strong>Lucas de Freitas</strong>
                    <button>sair</button>
                </div>
                <img src="http://github.com/lucasfreittas.png" alt="Foto do Usuário" />
            </Profile>
        </Container>
    )
}