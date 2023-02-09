import { Container, Header, Main, Footer } from "./styles";
import { FiStar } from 'react-icons/fi'
import { Tags } from "../Tags";


export function Card({data, setTaguinha, onClick, ...rest}){

    function handleStars(data){
       const numberOfStars = Math.ceil(data / 2);
       return [...Array(numberOfStars)].map((_, index) => (
        <FiStar key={index}/>
       ))
    }

    function handleClickedTag(tag){
        setTaguinha(tag.name)
    }
    
    return(
        <Container {...rest} >
            <Header>
                <h3>{data.title}</h3>
                <div>
                    {handleStars(data.rating)}
                </div>
    
            </Header>

            <Main>
                <p> {data.description} </p>
            </Main>

            {data.tags &&
                <Footer>
                    {
                        data.tags.map(tag =>
                            <Tags
                                key={tag.id}
                                title={tag.name}
                                onClick={() => handleClickedTag(tag) }
                        />)
                    }
                </Footer>
            }
        </Container>
    )
};