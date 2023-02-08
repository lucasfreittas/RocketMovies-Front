import { Container, Movies, Section } from './styles';

import { FiPlus } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { Header } from '../../Components/Header';
import { Button } from '../../Components/Button';
import { Card } from '../../Components/Card';
import { useEffect, useState } from 'react';
import { api } from '../../services/axios';



export function Home(){
    const [ notes, setNotes ] = useState([]);
    const [ search, setSearch ] = useState('');


    useEffect(() => {
        async function fetchNotes(){
            const response = await api.get(`/notes?title=${search}`);
            setNotes(response.data)
            console.log([notes])
        }

        fetchNotes();
    }, [search])

    return(
        <Container>
            <Header
                value={search}
                onChange={e => setSearch(e.target.value)}

            />
            <section>
                <Section>
                        <h3>Meus Filmes</h3>
                        <Link to='/createnote'>
                            <Button title='Adicionar Filme' icon={FiPlus}/>
                        </Link>
                </Section>
                <Movies>
        
                    <main>
                        {
                            notes && notes.map((note) => (
                                <Card
                                    key={String(note.id)}
                                    data={note}
                                />
                            ))
                        }
                    
                    </main>
                </Movies>
            </section>
        </Container>
    )
}