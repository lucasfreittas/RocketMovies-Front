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
import { api } from '../../services/axios';


export function CreateNote(){
    const navigate = useNavigate()

    const [ title, setTitle] = useState('');
    const [ rating, setRating] = useState(0);
    const [ description, setDescription] = useState('');

    const [ tags, setTags ] = useState([]);
    const [ newTag, setNewTag ] = useState('');

    function handleAddTag(){
        setTags(prevState => [...prevState, newTag])
        setNewTag('');
    }

    function handleRemoveTag(tagToDelete){
        setTags(prevState => prevState.filter(allTags => allTags !== tagToDelete))
    }

    function handleClearNote(){
        window.location.reload()
        
    }
    
    async function handleNewNote(){
        const newNote = {
            title,
            rating,
            description,
            tags,
        };

        if(!title){
            return alert('Adicione um título')
        };

        if(!rating){
            return alert('Adicione uma nota ao filme')
        };

        if(newTag){
            return alert('Uma das tags ficou em aberto, volte adicione-a')
        }

        await api.post('/notes', newNote);
        alert('Nota criada com sucesso!');
        navigate(-1);
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
                            onChange={e => setRating(e.target.value)}
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
                        {
                            tags.map((tag, index) => (
                                <CreateTags
                                    key={String(index)}
                                    value={tag}
                                    onClick={() => handleRemoveTag(tag)}
                                />
                            ))
                        }
                        <CreateTags
                            placeholder='Adicionar Tag'
                            isNew={true}
                            value={newTag}
                            onChange={e => setNewTag(e.target.value)}
                            onClick={handleAddTag}
                        />
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

