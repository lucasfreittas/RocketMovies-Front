import { useState } from 'react';
import { useAuth } from '../../hooks/auth';
import { api } from '../../services/axios';

import { Container, ProfileHeader, Avatar, Form } from './styles';

import { TextButton } from '../../Components/TextButton'
import { Input } from '../../Components/Input'
import { Button } from '../../Components/Button'
import { FiArrowLeft, FiUser, FiMail, FiLock, FiCamera } from 'react-icons/fi'
import placeholderAvatar from '../../Assets/placeholderAvatar.svg'

import { Link } from 'react-router-dom'


export function Profile(){
    const { user, updateUser } = useAuth()
    
    const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : placeholderAvatar;
    const [avatarFile, setAvatarFile] = useState(null);
    const [avatarImg, setAvatarImg] = useState(avatarUrl);

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
        await updateUser({user: userUpdated, avatarFile})

    }

    function handleAvatar(event){
        const file = event.target.files[0];
        setAvatarFile(file);

        const imagePreview = URL.createObjectURL(file);
        setAvatarImg(imagePreview);
    }

    return(
        <Container>
            <ProfileHeader>
                <Link to ='/'>
                    <TextButton icon={FiArrowLeft} title='Voltar' />
                </Link>
            </ProfileHeader>

            <Avatar>
                <img src={avatarImg} alt={`Foto de ${user.name}`} />
                <label htmlFor="avatar">
                    <FiCamera/>
                    <input
                        type="file"
                        id='avatar'
                        name='avatar'
                        accept='image/png, image/jpeg'
                        onChange={handleAvatar}
                    />
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