import { useEffect, useState } from "react"
import { TrackInfo, useSelectedTrack } from "../../../Home"
import { search_tracks } from "../../../../../api/api_calls"
import { SearchedTrackTile } from "./SearchedTrackTile/SearchedTrackTile"
import React from "react"
import { SearchTracksVerticalContainer } from "./SearchedTracksContainer.style"


interface SearchedTracksContainerProps {
    retrievedTracks: Array<TrackInfo>
}

export const SearchedTracksContainer = (props: SearchedTracksContainerProps) => {


    return (
        <SearchTracksVerticalContainer>
            {props.retrievedTracks.map((track) => <SearchedTrackTile key={track.id} track={track} />)}
        </SearchTracksVerticalContainer>
    )

}