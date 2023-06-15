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
    margin: 5rem;
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
    text-align: center;
    font-size: 3rem;
    padding-bottom: 0;
    margin-top: 2rem;
`


export const BannerDescription = styled.div`
    font-size: 1rem;
    text-align: center;
`
