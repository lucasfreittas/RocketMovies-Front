import { useState } from 'react';

import { Container, Form, Content, SectionTags } from './styles';

import { Header } from '../../Components/Header';
import { Input } from '../../Components/Input';
import { TextArea } from '../../Components/TextArea';
import { TextButton } from '../../Components/TextButton';
import { CreateTags } from '../../Components/CreateTags';
import { Button } from '../../Components/Button';
import { FiArrowLeft } from 'react-icons/fi'

import { Link, useNavigate } from 'react-router-dom'


export function CreateNote(){
    const [ title, setTitle] = useState('');
    const [ rate, setRate] = useState(0);
    const [ description, setDescription] = useState('');

    const navigate = useNavigate()
    
    function handleNewNote(){
        console.log(title, rate, description)
    }

    function handleClearNote(){
        navigate('/oi')
        window.location.reload(true)
        console.log('oi')
    }

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
                        <Input
                            type='text'
                            placeholder='Título'
                            onChange={e => setTitle(e.target.value)}
                        />

                        <Input
                            type='number'
                            step='1'
                            min='0'
                            max='10'
                            placeholder='Sua nota (de 0 a 5)'
                            onChange={e => setRate(e.target.value)}
                        />
                    </div>

                    <TextArea
                        placeholder='Observações'
                        onChange={e => setDescription(e.target.value)}
                    />
                </Form>

                <SectionTags>
                    <h3>Marcadores</h3>
                    <div className='newTags'>
                        <CreateTags title='React'/>
                        <CreateTags title='Novo Marcador' isNew={true}/>
                    </div>

                    <div className='bts'>
                        <Button
                            title='Apagar Nota'
                            secondary={true}
                            onClick={handleClearNote}
                        />

                        <Button
                            title='Salvar Nota'
                            onClick={handleNewNote}
                        />
                    </div>
                </SectionTags>
            </Content>
        </Container>
    )
}

