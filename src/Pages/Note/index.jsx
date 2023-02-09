import { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { api } from '../../services/axios';
import { useAuth } from '../../hooks/auth';

import { Container, Content, NoteView } from './styles';

import { Header } from '../../Components/Header';
import { TextButton } from '../../Components/TextButton';
import { Tags } from '../../Components/Tags'
import { FiArrowLeft, FiStar, FiClock } from 'react-icons/fi'


export function Note(){
    const [ note, setNote ] = useState({});
    const [ tagsNote, setTagsNote ] = useState([])
    const [ stars, setStars ] = useState([])
    const { user } = useAuth();

    const params = useParams();
    const navigate = useNavigate();

    async function handleDeleteNote(){
        await api.delete(`/notes/${params.id}`)
        navigate('/')
    }


    useEffect(() => {
        async function fetchNote(){
            const noteData = await api.get(`/notes/${params.id}`)
            setNote(noteData.data.movie_note);

            const tagsData = await api.get(`/notes/${params.id}`)
            setTagsNote(tagsData.data.tags)
        }
        fetchNote()
    }, [])

    useEffect(() => {
        if(!Object.keys(note).length){
            return
        }

        function handleStars(data){
            const numberOfStars = Math.ceil(data.rating/2);
            setStars([...Array(numberOfStars)].map((_, index) => (
                <FiStar key={index}/>
            )))
        };

        handleStars(note)
    }, [note])
    return(
        <Container>
            <Header />
            <Content>
                <div className='options'>
                    <Link to='/'>
                        <TextButton title='Voltar' icon={FiArrowLeft}/> 
                    </Link>
                    
                    <TextButton title='Excluir Nota' onClick={handleDeleteNote} /> 
                </div>

                <NoteView>
                    <div className='movieTitle'>
                        <h1>{note.title}</h1>
                        {stars}
                    </div>
                    <div className='userNote'>
                        <img src="http://github.com/lucasfreittas.png" alt={`Foto de ${user.name}`} />
                        <span>{user.name}</span>
                        <FiClock/>
                        <span>{note.created_at}</span>
                    </div>
                    <div className='tagsContainer'>
                        {
                            tagsNote && tagsNote.map((tag, index) => (
                                <Tags
                                    key={index}
                                    title={tag.name}
                                />
                            ))
                        }
                    </div>
                    <div className='review'>
                        <p>{note.description}</p>
                    </div>

                </NoteView>

            </Content>
        </Container>
    )
}