import { Container, Header, Main, Footer } from "./styles";
import { FiStar } from 'react-icons/fi'
import { Tags } from "../Tags";
import { useState, useEffect } from "react";
import { api } from "../../services/axios";

export function Card({data, setTaguinha, onClick, ...rest}){

    function handleClickedTag(tag){
        setTaguinha(tag.name)
    }
    
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