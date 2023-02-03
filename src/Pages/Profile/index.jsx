import { useState } from 'react';
import { useAuth } from '../../hooks/auth';
import { api } from '../../services/axios';

import { Container, ProfileHeader, Avatar, Form } from './styles';

import { TextButton } from '../../Components/TextButton'
import { Input } from '../../Components/Input'
import { Button } from '../../Components/Button'
import { FiArrowLeft, FiUser, FiMail, FiLock, FiCamera } from 'react-icons/fi'

import { Link } from 'react-router-dom'


export function Profile(){
    const { user, updateUser } = useAuth()

    const [ name, setName ] = useState(user.name);
    const [ email, setEmail ] = useState(user.email);
    const [ password, setPassword] = useState();
    const [ old_password, setOld_Password] = useState();

    async function handleUpdate(){
        const updated = {
            name,
            email,
            password,
            old_password
        };

        const userUpdated = Object.assign(user, updated)
        await updateUser({user: userUpdated})

    }

    return(
        <Container>
            <ProfileHeader>
                <Link to ='/'>
                    <TextButton icon={FiArrowLeft} title='Voltar' />
                </Link>
            </ProfileHeader>

            <Avatar>
                <img src="http://github.com/lucasfreittas.png" alt="Foto do Usuário" />
                <label htmlFor="avatar">
                    <FiCamera/>
                    <input type="file" id='avatar' name='avatar' accept='image/png, image/jpeg' />
                </label>
            </Avatar>

            <Form>
                <Input
                    type='text'
                    placeholder={name}
                    icon={FiUser}
                    onChange={e => setName(e.target.value)}
                />

                <Input
                    type='email'
                    placeholder={email}
                    icon={FiMail}
                    onChange={e => setEmail(e.target.value)}
                />

                <Input
                    type='password'
                    placeholder='Senha Atual'
                    icon={FiLock}
                    onChange={e => setOld_Password(e.target.value)}
                />

                <Input
                    type='password'
                    placeholder='Nova Senha'
                    icon={FiLock}
                    onChange={e => setPassword(e.target.value)}
                />

                <Button title='Salvar' onClick={handleUpdate}/>
            </Form>
        </Container>
    )
}