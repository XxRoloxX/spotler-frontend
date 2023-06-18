import React from "react";
import { SearchedTrackContainerTile, SearchedTrackNameAndImageContainer, TrackCoverImage, TrackIDField, TrackNameField } from "./SearchedTrackTile.style";
import { TrackInfo, useSelectedTrack } from "../../../../Home";


export const SearchedTrackTile = (props: { track: TrackInfo }) => {

    const { selectedTracks, setSelectedTracks } = useSelectedTrack();
    const [isActive, setIsActive] = React.useState(false);

    const handleTrackTileClick = () => {
        if (isActive) {
            setSelectedTracks((oldTracks => oldTracks.filter(track => track.id !== props.track.id)));

        } else {
            setSelectedTracks((oldTracks: TrackInfo[]) => { return [...oldTracks, props.track] });
        }

        setIsActive((isActive) => !isActive);
    }


    return (
        <SearchedTrackContainerTile onClick={handleTrackTileClick} isActive={isActive}>
            <TrackCoverImage src={props.track.image_url} width={"50px"} height={"50px"} />
            <SearchedTrackNameAndImageContainer>
                <TrackNameField>{props.track.name}</TrackNameField>
                <TrackIDField>{props.track.id}</TrackIDField>
            </SearchedTrackNameAndImageContainer>
        </SearchedTrackContainerTile>
    )
}