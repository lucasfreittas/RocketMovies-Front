import { Container } from './styles';

export function Tags({title, onClick, ...rest}){
    return(
        <Container onClick={onClick} {...rest}>
            {title}
        </Container>
    )
}