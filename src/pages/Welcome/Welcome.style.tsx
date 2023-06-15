import styled from "styled-components"
import global_styles from "../../assets/global-paramers.style"

export const LoginButton = styled.button`
    padding: 1rem;
    border-radius: 1rem;
    border-style: solid;
    text-align: center;
    font-size: 1rem;
    background-color: ${global_styles.green};
    border-width: 0;
`

export const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    padding: 3rem;

`

export const BannerText = styled.div`
    width: 80%;
    margin: auto;
    text-align: center;
    font-size: 10rem;
`

