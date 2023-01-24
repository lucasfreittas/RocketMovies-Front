import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: grid;
    grid-template-rows: 116px auto;
    grid-template-areas: 
    'header'
    'content';
`;

export const Content = styled.div`
    width: 100%;
    grid-area: content;
    margin: 40px 0;
    overflow-y: auto;
    
    > button {
        margin: 0 10%;
    }

`;

export const Form = styled.div`
    display: flex;
    flex-direction: column;
    gap: 40px;
    margin: 24px 10%;

    > div {
        display: flex;
        gap: 40px;
    }
`;

export const SectionTags = styled.div`
    margin: 40px 10%;

    > h3 {
        font-size: 20px;
        font-weight: normal;
        color: ${({theme}) => theme.COLORS.GRAY_100};
    }

    > .newTags {
        display: flex;
        flex-wrap: wrap;
        gap: 24px;

        margin-top: 24px;
        margin-bottom: 40px;
        padding: 20px;

        background-color: ${({theme}) => theme.COLORS.BLACK};
        border-radius: 8px;
        
    }

    > .bts {
        display: flex;
        gap: 40px;
    }
`;

