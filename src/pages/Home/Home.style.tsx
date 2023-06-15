import React, { MouseEventHandler } from "react";
import styled from "styled-components";

export const TrackInputField = styled.input`
  width: 60%;
  border-width:0;
  border-radius: 2rem;
  margin:auto;  
  font-size: 3rem;
  padding: 3rem;
`

export const MainContainer = styled.div`
display:flex;
flex-direction: column;
align-items: center;
justify-content: center;
align-items: center;
height: 100%;
padding: 3rem;
`
export const SearchTrackInfoButton = styled.button`
    width: 100%;
    border-radius: 2rem;
    border: 1px solid black;
    background-color: white;
    color: black;
    font-size: 1.5rem;
    padding: 1rem;
    margin: 1rem;
    cursor: pointer;
    &:hover{
        background-color: #333;
        color: white;
    }
`

export const MaterialUISearchButton = (props: { onClick: MouseEventHandler<HTMLButtonElement> }) => {

    return <SearchTrackInfoButton onClick={props.onClick}>
        <MaterialUISpan type={"search"} />
    </SearchTrackInfoButton>
}


export const MaterialUISpan = (props: { type: string, size?: string }) => {
    return <span className="material-symbols-outlined" style={{ display: "flex", alignItems: "center", justifyContent: "center", fontSize: props.size }}>{props.type}  </span>
}
