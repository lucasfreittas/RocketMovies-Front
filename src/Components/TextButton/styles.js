import styled from 'styled-components';

export const Container = styled.button`
    display: flex;
    gap: 8px;

    align-items: center;
    text-align: center;
    justify-content: center;

    font-size: 16px;
    font-weight: 400;

    background: none;
    color: ${({theme}) => theme.COLORS.PINK};

    border: none;


`;