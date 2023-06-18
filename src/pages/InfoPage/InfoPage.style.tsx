import styled from "styled-components";

export const InfoPageContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: left;
    align-items: left;
    width: 60vw;
    margin: auto;
    height: 80vh;
    padding: 5rem;
    row-gap: 2rem;
    background-color: black;
`

export const InfoTileContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    border-style: solid;
    border-width: 1px;
    border-color: white;
    border-radius: 2rem;
`

export const InfoTextContainer = styled.div`
    text-align: center;
    font-size: 1.0rem;
    width: 100%;
    height: 100%;
    display: flex;
    padding: 0.5rem;
    justify-content: center;
    align-items: center;
`

export const InfoPageTitle = styled.h1`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2rem;
`