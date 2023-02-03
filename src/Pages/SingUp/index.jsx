import { useState } from 'react';
import { useAuth } from '../../hooks/auth';
import { api } from '../../services/axios'

import { Container, Form, BackgroundImg } from './styles';

import { Input } from '../../Components/Input';
import { Button } from '../../Components/Button';
import { TextButton } from '../../Components/TextButton';
import { FiMail, FiLock, FiArrowLeft, FiUser } from 'react-icons/fi'

import { Link, useNavigate } from 'react-router-dom'

export function SignUp(){
    const [ name, setName ] = useState('');
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');

    const navigate = useNavigate()

    function handleSignUp(){
        if (!name, !email, !password){
            return alert ('Por favor, preencha todos os campos!');
        };

        api.post('/user', {name, email, password})
            .then(() => {
                alert('Usuário cadastrado com sucesso!')
                navigate('/')
            })
            .catch(error => {
                if(error.response){
                    alert(error.response.data.message);
                } else {
                    alert('Não foi possível caastrar!')
                }
            });
        
        
    }

    return(
        <Container>
            <Form>
                <h1>RocketMovies</h1>
                <span>Aplicação para acompanhar tudo que assistir.</span>

                <h3>Crie sua conta</h3>

                <div>
                    <Input
                        type='text'
                        placeholder='Nome'
                        icon={FiUser}
                        onChange={e => setName(e.target.value)}
                    />

                    <Input
                        type='email'
                        placeholder='E-mail'
                        icon={FiMail}
                        onChange={e => setEmail(e.target.value)}
                    />

                    <Input
                        type='password'
                        placeholder='Senha'
                        icon={FiLock}
                        onChange={e => setPassword(e.target.value)}
                    />

                    <Button title='Cadastrar' onClick={handleSignUp}/>
                </div>

                <Link to='/' className='link'>
                    <TextButton title='Voltar para o login' icon={FiArrowLeft}/>
                </Link>
            </Form>

            <BackgroundImg/>
        </Container>
    )
}