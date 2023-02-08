import styled from 'styled-components';

export const Container = styled.button`
    font-size: 14px;
    font-weight: 400;
    padding: 8px 16px;
    background-color: ${({theme}) => theme.COLORS.GRAY_300};
    color: ${({theme}) => theme.COLORS.GRAY_100};
    border-radius: 8px;
    border: none;

    cursor: pointer;

    &:hover{
        filter: brightness(0.9)
    }
`;