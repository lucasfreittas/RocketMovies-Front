import { Container, Form, BackgroundImg } from './styles';
import { Input } from '../../Components/Input';
import { Button } from '../../Components/Button';
import { TextButton } from '../../Components/TextButton';
import { FiMail, FiLock } from 'react-icons/fi'

export function SignIn(){
    return(
        <Container>
            <Form>
                <h1>RocketMovies</h1>
                <span>Aplicação para acompanhar tudo que assistir.</span>

                <h3>Faça seu login</h3>

                <div>
                    <Input type='email' placeholder='E-mail' icon={FiMail}/>
                    <Input type='password' placeholder='Senha' icon={FiLock}/>
                    <Button title='Entrar'/>
                </div>

                <TextButton title='Criar Conta'/>
            </Form>

            <BackgroundImg/>
        </Container>
    )
}