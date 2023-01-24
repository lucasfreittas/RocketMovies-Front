import { Container } from './styles';
import {FiPlus, FiX} from 'react-icons/fi'

export function CreateTags({isNew, title, ...rest}){
    return(
        <Container isNew={isNew}>
            {title}
            <button>
                {isNew ? <FiPlus/> : <FiX/>}
            </button>    
        </Container>
    )
}