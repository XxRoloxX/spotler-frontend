import React, { useEffect } from "react"
import { MasterViewContainer, SearchContainer } from "./MasterView.style"
import { MaterialUISearchButton } from "../../Home.style"
import { SearchBar } from "./SearchBar/SearchBar"
import { TrackInfo, useSelectedTrack } from "../../Home";
import { SearchedTracksContainer } from "./SearchedTracksContainer/SearchedTracksContainer";


interface MasterViewProps {
    setSelectedTrack: (selectedTrack: TrackInfo)=> void;
}


export const MasterView = ()=> {

    const [searchInput, setSearchInput] = React.useState("")
    const [retrievedTracks, setRetrievedTracks] = React.useState<TrackInfo[]>([])

    useEffect(()=>{
        console.table(retrievedTracks)
    },[retrievedTracks])

    return ( 
            <MasterViewContainer>
                <SearchContainer>
                    <SearchBar setSelectedTrackName={setSearchInput} setRetrievedTracks={setRetrievedTracks}/>
                </SearchContainer>
                <SearchedTracksContainer retrievedTracks={retrievedTracks} />
            </MasterViewContainer>
    )
}