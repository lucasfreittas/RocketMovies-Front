import { Container, Header, Main, Footer } from "./styles";
import { FiStar } from 'react-icons/fi'
import { Tags } from "../Tags";
import { useEffect, useState } from "react";


export function Card({data, setTaguinha, onClick, ...rest}){
    const [stars, setStars] = useState([])
 

    function handleClickedTag(e, tag){
        e.stopPropagation();
        setTaguinha(tag.name)

    }
    
    useEffect(() => {

        function handleStars(data){
            const numberOfStars = Math.ceil(data.rating / 2);
            setStars([...Array(numberOfStars)].map((_, index) => (
             <FiStar key={index}/>
            )))
         }
         handleStars(data)
    }, [])

    return(
        <Container onClick={onClick} {...rest} >
            <Header>
                <h3>{data.title}</h3>
                <div>{stars}</div>
    
            </Header>

            <Main>
                <p> {data.description} </p>
            </Main>

            {data.tags &&
                <Footer >
                    {
                        data.tags.map(tag =>
                            <Tags
                                key={tag.id}
                                title={tag.name}
                                onClick={(e) => handleClickedTag(e ,tag) }
                        />)
                    }
                </Footer>
            }
        </Container>
    )
};