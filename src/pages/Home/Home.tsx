import React, { useState } from "react";
import { MainContainer, TrackGenre, TrackGenresContainer } from "../Home/Home.style";
import { MaterialUISearchButton, SearchContainer, TrackInputField } from "./Home.style";
import { get_track_genres, search_tracks } from "../../api/api_calls";


export const Home = () => {

    const [trackId, setTrackId] = useState("")
    const [trackGenres, setTrackGenres] = useState({})

    const handleTrackIdSubmit = () => {
        console.log(trackId)
        get_track_genres(trackId).then(res => {
            setTrackGenres(res.data)
        })
    }

    const handleTrackInputChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        setTrackId(e.target.value)
        console.log(trackId)
        if(trackId){
            search_tracks(trackId).then(res => {
            console.log(res.data)
        })
        }
    }

    return (
        <MainContainer>
            <SearchContainer>
                <TrackInputField placeholder="Track Id" onChange={handleTrackInputChange} />
                <MaterialUISearchButton onClick={handleTrackIdSubmit} />
            </SearchContainer>
            <TrackGenresContainer>
                {Object.entries(trackGenres).sort(([,valueA], [,valueB])=>(valueB as number)- (valueA as number)).map(([key, value]) => <TrackGenre key={key+value}>{key + ": "+value}</TrackGenre>)}
            </TrackGenresContainer>

        </MainContainer>
    )
}