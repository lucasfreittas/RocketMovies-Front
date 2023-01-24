import styled from 'styled-components';

export const Container = styled.div`
    display: grid;
    grid-template-rows: 116px auto;
    grid-template-areas:
    'header'
    'content';

    width: 100%;
    height: 100vh;
    justify-content: center;

`;

export const Section = styled.div`
    grid-area: content;
    padding: 0 10%;
    margin-top: 48px;
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin-bottom: 24px;
    

        > h3 {
                font-size: 32px;
                width: 100%;
            }
        
        button {
            width: 220px;
        }
`;

export const Movies = styled.div`
        width: 100%;
        overflow-y: auto;
        padding: 0 10%;


        > main{
            grid-area: content;
            width: 100%;
            display: flex;
            flex-direction: column;
            gap: 24px;
            overflow-y: auto;
            margin-bottom: 40px;
    
        }
`;
