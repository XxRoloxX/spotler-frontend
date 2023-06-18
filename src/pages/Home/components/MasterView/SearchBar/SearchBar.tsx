import { useState } from "react"
import { FieldTrackSet, TrackInputField } from "./SeachBar.styles"
import React from "react"
import { search_tracks } from "../../../../../api/api_calls";
import { TrackInfo } from "../../../Home";

interface SearchedTrackInfo {
    id: string;
    name: string;
    preview_url: string
}

interface SearchBarProps {
    setSelectedTrackName: (id: string) => void;
    setRetrievedTracks: (tracks: Array<TrackInfo>) => void;
}

export const SearchBar = (props: SearchBarProps) => {
    const [searchInput, setSearchInput] = useState("")
    const [listOfFetchedTracks, setListOfFetchedTracks] = useState<SearchedTrackInfo[]>([])

    const handleEnterPress = (event: React.KeyboardEvent<HTMLElement>) => {
        if (event.key == "Enter" && searchInput.length > 0) {
            search_tracks(searchInput).then(tracks=>{
                props.setRetrievedTracks(tracks.data)
            })
        }
    }

    const handleOptionsClick = (track_name: string) => (event: React.MouseEvent<HTMLElement>) => {
        setSearchInput(track_name)
    }

    const handleTrackInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const track_name = e.target.value
        setSearchInput(track_name)
        console.log(track_name)
    }

    return <>
        <FieldTrackSet>
            <legend>Spotify Tracks</legend>
            <TrackInputField id="search_input" list={"search_tracks"} onChange={handleTrackInputChange} onKeyDown={handleEnterPress} placeholder={"Search spotify tracks"} />
        </FieldTrackSet>
    </>


}