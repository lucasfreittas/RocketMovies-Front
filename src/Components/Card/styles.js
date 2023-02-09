import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;

    padding: 32px;
    border-radius: 16px;

    background-color: ${({theme}) => theme.COLORS.BACKGROUND_PINK};

    transition: all 200ms ease;

    &:hover{
        cursor: pointer;
        transform: scale(1.03);
        
        z-index: 10;
    }
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


    > p {
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;

        -webkit-line-clamp: 3;
        line-clamp: 3; 
        
        -webkit-box-orient: vertical;
    }


`;

export const Footer = styled.div`
    display: flex;
    width: fit-content;

    gap: 10px;
`;