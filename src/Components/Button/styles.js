import styled from 'styled-components';

export const Container = styled.button`
    display: flex;
    width: 100%;
    justify-content: center;
    gap: 8px;
    padding: 16px 32px;
    align-items: center;
    text-align: center;

    background-color: ${({theme, secondary}) => secondary ? theme.COLORS.BLACK : theme.COLORS.PINK};
    color: ${({theme, secondary}) => secondary ? theme.COLORS.PINK : theme.COLORS.BLACK};

    border: 0;
    border-radius: 8px;

`;