import React, { MouseEventHandler } from "react";
import styled from "styled-components";
import global_styles from "../../assets/global-paramers.style";


export const MainContainer = styled.div`
    display:flex;
    flex-direction: row;
    margin-top:0;
    padding: 2rem;
    height: 90vh;
`
export const SearchTrackInfoButton = styled.button`
    border-radius: 1rem;
    border: 1px solid black;
    background-color: white;
    color: black;
    font-size: 1rem;
    padding: 1rem;
    color: white;
    background-color: transparent;
    cursor: pointer;
    &:hover{
        background-color: #333;
        color: green;
    }
`



export const TrackGenresContainer = styled.div`
    margin-top: 5rem;
    row-gap: 1rem;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    column-gap: 1rem;
`

export const TrackGenre = styled.div`
    text-align: left;
    font-size: 1rem;
    opacity: 0.9;
    padding: 1rem;
    background-color: ${global_styles.sus_purple};
    border-width: 0px;
    border-radius: 1rem;
`


export const MaterialUISearchButton = (props: { onClick: MouseEventHandler<HTMLButtonElement> }) => {

    return <SearchTrackInfoButton onClick={props.onClick}>
        <MaterialUISpan type={"search"} />
    </SearchTrackInfoButton>
}


export const MaterialUISpan = (props: { type: string, size?: string }) => {
    return <span className="material-symbols-outlined" style={{ display: "flex", alignItems: "center", justifyContent: "center", fontSize: props.size }}>{props.type}  </span>
}
