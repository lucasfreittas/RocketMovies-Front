import { Container, ProfileHeader, Avatar, Form } from './styles';
import { TextButton } from '../../Components/TextButton'
import { Input } from '../../Components/Input'
import { Button } from '../../Components/Button'
import { FiArrowLeft, FiUser, FiMail, FiLock, FiCamera } from 'react-icons/fi'
import { Link } from 'react-router-dom'


export function Profile(){
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
                <Input type='text' placeholder='Lucas Freitas' icon={FiUser}/>
                <Input type='email' placeholder='l.freittas@outlook.com' icon={FiMail}/>
                <Input type='password' placeholder='Senha Atual' icon={FiLock}/>
                <Input type='password' placeholder='Nova Senha' icon={FiLock}/>

                <Button title='Salvar'/>
            </Form>
        </Container>
    )
}