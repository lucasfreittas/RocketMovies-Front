import { Container, Header, Main, Footer } from "./styles";
import { FiStar } from 'react-icons/fi'
import { Tags } from "../Tags";

export function Card({data, ...rest}){
    return(
        <Container {...rest} >
            <Header>
                <h3>{data.title}</h3>
                <div>
                    <FiStar/>
                    <FiStar/>
                    <FiStar/>
                    <FiStar/>
                    <FiStar/>

                </div>
    
            </Header>

            <Main>
                <p> {data.description} </p>
            </Main>

            {data.tags &&
                <Footer>
                    {data.tags.map( tag => <Tags key={tag.id} title={tag.name} />)}
                </Footer>
            }
        </Container>
    )
};