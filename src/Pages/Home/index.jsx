import { Container, Movies, Section } from './styles';

import { FiPlus} from 'react-icons/fi';

import { Header } from '../../Components/Header';
import { Tags } from '../../Components/Tags';
import { Button } from '../../Components/Button';
import { Card } from '../../Components/Card';


export function Home(){
    return(
        <Container>
            <Header/>
            <Section>
                    <h3>Meus Filmes</h3>
                    <Button title='Adicionar Filme' icon={FiPlus}/>
            </Section>
            <Movies>
      
                <main>
               
                        <Card data={{
                                title: 'Interestellar',
                                description: 'Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária em futuro de data desconhecida. Cooper, ex-piloto da NASA, tem uma fazenda com sua família. Murphy, a filha de dez anos de Cooper, acredita que seu quarto está assombrado por um fantasma que tenta se',
                                tags:[
                                    {id: '1', name: 'Ficção Cientifica'},
                                    {id: '2', name: 'Ação'}
                                ]
                        }}/>

                            <Card data={{
                                title: 'Interestellar',
                                description: 'Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária em futuro de data desconhecida. Cooper, ex-piloto da NASA, tem uma fazenda com sua família. Murphy, a filha de dez anos de Cooper, acredita que seu quarto está assombrado por um fantasma que tenta se',
                                tags:[
                                    {id: '1', name: 'Ficção Cientifica'},
                                    {id: '2', name: 'Ação'}
                                ]
                        }}/>

                            <Card data={{
                                title: 'Interestellar',
                                description: 'Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária em futuro de data desconhecida. Cooper, ex-piloto da NASA, tem uma fazenda com sua família. Murphy, a filha de dez anos de Cooper, acredita que seu quarto está assombrado por um fantasma que tenta se',
                                tags:[
                                    {id: '1', name: 'Ficção Cientifica'},
                                    {id: '2', name: 'Ação'}
                                ]
                        }}/>
                   
                </main>
            </Movies>
        </Container>
    )
}