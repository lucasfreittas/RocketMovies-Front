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
    const [ taguinha, setTaguinha] = useState('');
    


    useEffect(() => {
        async function fetchNotes(){
            const response = await api.get(`/notes?title=${search}&tags=${taguinha}`);
            setNotes(response.data)
        }
        fetchNotes();
        console.log(taguinha)
    }, [search, taguinha])

    return(
        <Container>
            <Header
                value={search || taguinha}
                onChange={e => setSearch(e.target.value)}
                onClick={() => setTaguinha('')}

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
                            notes && notes.map((note, index) => (
                                <Card
                                    key={String(note.id)}
                                    data={note}
                                    setTaguinha={setTaguinha}
                                />
                            ))
                        }
                    
                    </main>
                </Movies>
            </section>
        </Container>
    )
}