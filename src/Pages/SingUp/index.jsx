import { Container, Form, BackgroundImg } from './styles';
import { Input } from '../../Components/Input';
import { Button } from '../../Components/Button';
import { TextButton } from '../../Components/TextButton';
import { FiMail, FiLock, FiArrowLeft, FiUser } from 'react-icons/fi'
import { Link } from 'react-router-dom'

export function SignUp(){
    return(
        <Container>
            <Form>
                <h1>RocketMovies</h1>
                <span>Aplicação para acompanhar tudo que assistir.</span>

                <h3>Crie sua conta</h3>

                <div>
                    <Input type='text' placeholder='Nome' icon={FiUser}/>
                    <Input type='email' placeholder='E-mail' icon={FiMail}/>
                    <Input type='password' placeholder='Senha' icon={FiLock}/>
                    <Button title='Cadastrar'/>
                </div>

                <Link to='/' className='link'>
                    <TextButton title='Voltar para o login' icon={FiArrowLeft}/>
                </Link>
            </Form>

            <BackgroundImg/>
        </Container>
    )
}