import styled from 'styled-components';
import cinema from '../../Assets/cinema.png'

export const Container = styled.div`
    display: flex;
    height: 100vh;
    width: 100%;
    align-items: stretch;

`;

export const Form = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0 162px;

    > h1 {
        font-size: 48px;
        color: ${({theme}) => theme.COLORS.PINK};
        font-weight: bold;
    }

    > span {
        font-size: 14px;
        color: ${({theme}) => theme.COLORS.GRAY_100};
        align-items: flex-start;
    }

    > h3 {
        margin: 42px 0;
        font-size: 24px;
        font-weight: 400;
    }

    > div {
        width: 100%;
        margin-bottom: 24px;
       
       > div:nth-child(1), div:nth-child(2) {
        margin-bottom: 8px;
       }

       > button {
        margin: 24px 0;
        width: 100%;
        justify-content: center;
    }
    }

   
`;

export const BackgroundImg = styled.div`
    flex: 1;
    background: url(${cinema}) center center no-repeat;
    background-size: cover;
`;