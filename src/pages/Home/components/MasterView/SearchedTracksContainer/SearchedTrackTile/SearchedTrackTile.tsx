import React, { useEffect } from "react";
import { SearchedTrackAndPlayButtonContainer, SearchedTrackContainerTile, SearchedTrackNameAndImageContainer, TrackCoverImage, TrackIDField, TrackNameField, TrackPlayButton } from "./SearchedTrackTile.style";
import { TrackInfo, useSelectedTrack } from "../../../../Home";


export const SearchedTrackTile = (props: { track: TrackInfo }) => {

    const {selectedTracks, setSelectedTracks } = useSelectedTrack();
    const [isActive, setIsActive] = React.useState(false);
    const [isPlaying, setIsPlaying] = React.useState(false);
    const [musicPlayer, setMusicPlayer] = React.useState<HTMLAudioElement|null>(null);

    useEffect(() => {
        setMusicPlayer(new Audio(props.track.preview_url));
    },[])


    const handlePlay =() => {

        if(!props.track.preview_url) {
            return
        }

        if(isPlaying) {
            musicPlayer!.pause();
        }else{
            musicPlayer!.play();
        }
        setIsPlaying(()=>!isPlaying);
    }

    const handleTrackTileClick = () => {
        if (isActive) {
            setSelectedTracks((oldTracks => oldTracks.filter(track => track.id !== props.track.id)));

        } else {
            setSelectedTracks((oldTracks: TrackInfo[]) => { return [...oldTracks, props.track] });
        }

        setIsActive((isActive) => !isActive);
    }




    return (
        <SearchedTrackAndPlayButtonContainer>
            <SearchedTrackContainerTile onClick={handleTrackTileClick} isActive={isActive}>
                <TrackCoverImage src={props.track.image_url} width={"50px"} height={"50px"} />
                <SearchedTrackNameAndImageContainer>
                    <TrackNameField>{props.track.name}</TrackNameField>
                    <TrackIDField>{props.track.id}</TrackIDField>
                </SearchedTrackNameAndImageContainer>
            </SearchedTrackContainerTile>
            <TrackPlayButton onClick={handlePlay} isPlaying={isPlaying} />
        </SearchedTrackAndPlayButtonContainer>
    )
}