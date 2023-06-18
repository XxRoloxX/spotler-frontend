import React, { useEffect, useState } from "react"
import { useSelectedTrack } from "../../Home"
import { DetailedViewContainer, DetailedViewTitle } from "./DetailedView.style"
import {  get_tracks_genres } from "../../../../api/api_calls"
import { GenresRadarChart } from "./GenresRadarChart/GenresRadarChart"
import { SelectionRow } from "./SelectionRow/SelectionRow"

interface TrackGenres {
    [index: string]: number
}

export const DetailedView = () => {
    const { selectedTracks } = useSelectedTrack()
    const [tracksGenres, setTrackGenres] = useState<TrackGenres[]>([])

    useEffect(() => {
        if (!selectedTracks) {
            return
        }

            get_tracks_genres(selectedTracks.map(track=>track.id)).then(result => {
                setTrackGenres(result.map(res=>res.data))
            }
            )


        console.table(tracksGenres)


    }, [selectedTracks])


    return (
        <DetailedViewContainer>
            <SelectionRow/>
            <DetailedViewTitle>Radar chart of genres</DetailedViewTitle>
            <GenresRadarChart data={tracksGenres} />
        </DetailedViewContainer>
    )


}