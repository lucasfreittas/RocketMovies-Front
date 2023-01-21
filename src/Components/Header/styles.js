import styled from 'styled-components';

export const Container = styled.header`
    grid-area: header;
    width: 100vw;
    padding: 0 10%;

    display: flex;
    align-items: center;

    justify-content: space-between;

    border-bottom: ${({theme}) => `1px solid ${theme.COLORS.GRAY_300}`};

    > h1 {
        font-size: 32px;
        color: ${({theme}) => theme.COLORS.PINK}
    }
`

export const Profile = styled.div`
    display: flex;
    gap: 12px;
    align-items: center;

    > img {
        width: 80px;
        height: 80px;
        border-radius: 50%;
    }


    > div {
        display: flex;
        flex-direction: column;
        min-width: 125px;
        
        strong{
            font-size: 16px;
            font-weight: bold;
        }

        button{
            font-size: 16px;
            font-weight: normal;
            color: ${({theme}) => theme.COLORS.GRAY_100};
            text-align: right;

            background: none;
            border: none;
        }
    }
`