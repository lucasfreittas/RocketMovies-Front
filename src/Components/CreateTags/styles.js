import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 16px;
    padding: 16px;
    font-size: 16px;
    background-color: ${({theme, isNew}) => isNew ? 'none' : theme.COLORS.GRAY_300};
    color: ${({theme, isNew}) => isNew ? theme.COLORS.GRAY_100 : theme.COLORS.WHITE};
    border: ${({theme, isNew}) => isNew ? `2px dashed ${theme.COLORS.GRAY_100}` : 'none' };
    width: fit-content;
    border-radius: 8px;

    > input {
        background: none;
        width: 100%;
        border: none;
        color: ${({theme}) => theme.COLORS.WHITE}
    }

    > button{
        font-size: 20px;
        color: ${({theme}) => theme.COLORS.PINK};
        background: none;
        border: none;
        align-items: center;
        display: flex;
        transform: translateY(1px);
    }
`;