import React, { useEffect, useState } from "react";
import { useSelectedTrack } from "../../Home";
import { DetailedViewContainer } from "./DetailedView.style";
import { get_tracks_features, get_tracks_genres } from "../../../../api/api_calls";
import { GenresRadarChart } from "./GenresRadarChart/GenresRadarChart";
import { ViewChangeBar } from "./ViewChangeBar/ViewChangeBar";
import { BarChart } from "../../../../components/Charts/BarChart";
import { FeaturesChart } from "./FeaturesChart/FeaturesChart";

interface TrackGenres {
  [index: string]: number;
}

interface TrackFeatures {
  [index: string]: number;
}

export type ViewsTypes = "genres" | "metadata";

export enum VIEWS {
  GENRES = "genres",
  METADATA = "metadata",
}

export const DetailedView = () => {
  const { selectedTracks } = useSelectedTrack();
  const [tracksGenres, setTrackGenres] = useState<TrackGenres[]>([]);
  const [selectedView, setSelectedView] = useState<ViewsTypes>("genres");
  const [tracksFeatures, setTracksMetadata] = useState<TrackFeatures[]>([]);

  useEffect(() => {
    if (!selectedTracks) {
      return;
    }

    get_tracks_genres(selectedTracks.map((track) => track.id)).then(
      (result) => {
        setTrackGenres(result.map((res) => res.data));
      }
    );
  }, [selectedTracks]);

  useEffect(() => {
    if(!selectedTracks) {
        return;
    }
    get_tracks_features(selectedTracks.map((track) => track.id)).then(
        (result) => {
            setTracksMetadata(result.map((res) => res.data));
        }
    )

  },[selectedTracks]);

  return (
    <DetailedViewContainer>
      <ViewChangeBar
        selectedView={selectedView}
        setSelectedView={setSelectedView}
      />
      {selectedView === VIEWS.GENRES ? (
        <GenresRadarChart data={tracksGenres} />
      ) : (
        <FeaturesChart data={tracksFeatures} />
      )}
    </DetailedViewContainer>
  );
};
