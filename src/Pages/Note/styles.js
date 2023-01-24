import styled from 'styled-components';

export const Container = styled.div `
    display: grid;
    grid-template-rows: 116px auto;
    grid-template-areas: 
    'header'
    'content';

    width: 100%;
    height: 100vh;
    
`;

export const Content = styled.div`
    margin: 40px 0;

    overflow-y: auto;
    padding: 0 10%;
`;

export const NoteView = styled.div`
    margin: 24px 0;
    
    > .movieTitle {
        display: flex;
        align-items: center;
        margin-bottom: 24px;
        
       
       h1 {
            font-size: 36px;
            margin-right: 20px;
       }

       svg {
            font-size: 20px;
            margin-right: 8px;
            justify-content: center;
            color: ${({theme}) => theme.COLORS.PINK};
            transform: translateY(3px);
            fill: ${({theme}) => theme.COLORS.PINK};
       }
    }

    > .userNote {
        display: flex;
        margin-bottom: 40px;
        gap: 8px;
        align-items: center;
        font-weight: normal;
        font-size: 16px;

        > img {
            width: 20px;
            border-radius: 50%;
        }

        > svg {
            color: ${({theme}) => theme.COLORS.PINK};
            font-size: 16px;
        }
    }

    > .tagsContainer {
        display: flex;
        gap: 8px;
        margin-bottom: 40px;
    }

    > .review {
        font-size: 16px;
        font-weight: normal;
        text-align: justify;
    }
`;