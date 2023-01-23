import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 32px;
    border-radius: 16px;

    background-color: ${({theme}) => theme.COLORS.BACKGROUND_PINK};

`;

export const Header = styled.div`
    font-size: 24px;
    font-weight: bold;

    > div {
        display: flex;
        gap: 8px;
        
        svg {
            font-size: 14px;
            color: ${({theme}) => theme.COLORS.PINK};
            stroke-width: 2px;
            margin-top: 8px;
        }
    }

`;

export const Main = styled.div`
    font-size: 16px;
    font-weight: normal;
    color: ${({theme}) => theme.COLORS.GRAY_100};
    margin: 16px 0 20px 0px;


`;

export const Footer = styled.div`
    display: flex;
    gap: 10px;
`;