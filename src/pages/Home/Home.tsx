import React, { useState } from "react";
import { MainContainer } from "../Login/Login.styles";
import { MaterialUISearchButton, TrackInputField } from "./Home.style";
import { get_track_genres } from "../../api/api_calls";


export const Home = () => {

    const [trackId, setTrackId] = useState("")

    const handleTrackIdSubmit = () => {
        console.log(trackId)
        get_track_genres(trackId).then(res => {
            console.log(res)
        })
    }

    return (
    <MainContainer>
        <TrackInputField onChange={(e)=>setTrackId(e.target.value)}/>
        <MaterialUISearchButton onClick={handleTrackIdSubmit}/>
    </MainContainer>
    
    )
}