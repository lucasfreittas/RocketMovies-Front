import styled from 'styled-components';

export const Container = styled.button`
    display: flex;
    gap: 8px;
    padding: 16px 32px;
    align-items: center;

    background-color: ${({theme}) => theme.COLORS.PINK};
    color: ${({theme}) => theme.COLORS.BLACK};

    border: 0;
    border-radius: 8px;

`;