import { useState } from 'react'
import { useAuth } from '../../hooks/auth';

import { Container, Form, BackgroundImg } from './styles';

import { Input } from '../../Components/Input';
import { Button } from '../../Components/Button';
import { TextButton } from '../../Components/TextButton';
import { FiMail, FiLock } from 'react-icons/fi'

import { Link } from 'react-router-dom'

export function SignIn(){
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');

    const { signIn } = useAuth()

    function handleSignIn(){
        signIn({email, password});
    }

    return(
        <Container>
            <Form>
                <h1>RocketMovies</h1>
                <span>Aplicação para acompanhar tudo que assistir.</span>

                <h3>Faça seu login</h3>

                <div>
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
                        onChange={e=> setPassword(e.target.value)}
                    />
                    
                    <Button title='Entrar' onClick={handleSignIn}/>
                </div>

                <Link to='/signup' className='link'>
                    <TextButton title='Criar Conta'/>
                </Link>
            </Form>

            <BackgroundImg/>
        </Container>
    )
}