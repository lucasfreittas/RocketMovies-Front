import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    max-width: 800px;
    height: 56px;
    border-radius: 12px;
    background-color: ${({theme}) => theme.COLORS.GRAY_300};
    color: ${({theme}) => theme.COLORS.GRAY_100};
    display: flex;
    align-items: center;
    padding-left: 24px;


    > input {
        background: none;
        border: none;
        color: ${({theme}) => theme.COLORS.WHITE};
        font-weight: normal;

        &::placeholder{
        color: ${({theme}) => theme.COLORS.GRAY_100};
        font-weight: normal;
    }
}

    > svg {
        color: ${({theme}) => theme.COLORS.GRAY_100};
        margin-right: 12px;
    }

`