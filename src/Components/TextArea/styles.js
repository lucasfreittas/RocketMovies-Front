import styled from 'styled-components';

export const Container = styled.textarea`
    width: 100%;
    height: 280px;

    background-color: ${({theme}) => theme.COLORS.GRAY_300};
    color: ${({theme}) => theme.COLORS.WHITE};
    border: none;
    border-radius: 12px;
    padding-left: 24px;
    padding-top: 16px;
    resize: none;

    &::placeholder{
        color: ${({theme}) => theme.COLORS.GRAY_100};
        font-size: 16px;
    }
`;