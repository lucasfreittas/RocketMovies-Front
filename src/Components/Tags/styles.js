import styled from 'styled-components';

export const Container = styled.span`
    font-size: 14px;
    font-weight: 400;
    padding: 8px 16px;
    background-color: ${({theme}) => theme.COLORS.GRAY_300};
    color: ${({theme}) => theme.COLORS.GRAY_100};
    border-radius: 8px;

    cursor: pointer;

    &:hover{
        filter: brightness(0.9)
    }
`;