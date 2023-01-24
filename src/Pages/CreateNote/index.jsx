import { Container, Form, Content, SectionTags } from './styles';
import { Header } from '../../Components/Header';
import { Input } from '../../Components/Input';
import { TextArea } from '../../Components/TextArea';
import { TextButton } from '../../Components/TextButton';
import { CreateTags } from '../../Components/CreateTags';
import { Button } from '../../Components/Button';
import { FiArrowLeft } from 'react-icons/fi'
import { Link } from 'react-router-dom'

export function CreateNote(){
    return(
        <Container>
            <Header/>
            <Content>
                <Link to='/' >
                    <TextButton title='Voltar' icon={FiArrowLeft} className='linkWrapper'/>
                </Link>
                <Form>
                    <h1>Novo Filme</h1>

                    <div>
                        <Input type='text' placeholder='Título'/>
                        <Input type='number' placeholder='Sua nota (de 0 a 5)'/>
                    </div>

                    <TextArea placeholder='Observações'/>
                </Form>

                <SectionTags>
                    <h3>Marcadores</h3>
                    <div className='newTags'>
                        <CreateTags title='React'/>
                        <CreateTags title='Novo Marcador' isNew={true}/>
                    </div>

                    <div className='bts'>
                        <Button secondary title='Excluir Filme'/>
                        <Button title='Salvar Alterações'/>
                    </div>
                </SectionTags>
            </Content>
        </Container>
    )
}

