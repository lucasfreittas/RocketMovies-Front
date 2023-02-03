import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const ProfileHeader = styled.header`
    width: 100%;
    height: 200px;
    display: flex;
    align-items: center;
    padding-left: 144px;
    background-color: ${({theme}) => theme.COLORS.BACKGROUND_PINK};
`;

export const Avatar = styled.div`
    position: relative;
    margin-top: -120px;
    margin-bottom: 64px;

    img {
        width: 220px;
        height: 220px;
        object-fit: cover;
        border-radius: 50%;
    }

    label {
        position: absolute;
        bottom: 0px;
        right: 20px;
        background-color: ${({theme}) => theme.COLORS.PINK};
        width: 48px;
        height: 48px;;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        cursor: pointer;
        
        > input {
            display: none;
        }

        > svg {
            font-size: 20px;
            color: ${({theme}) => theme.COLORS.BLACK}
        }
    }
    
`;

export const Form = styled.div`
    width: 360px;
    display: flex;
    flex-direction: column;
    gap: 8px;

    > :nth-child(2){
        margin-bottom: 16px;
    }

    > button {
        margin: 24px 0;
    }
`;
