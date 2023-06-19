import styled from "styled-components";
import global_styles from "../../../../../../assets/global-paramers.style";
import { MouseEventHandler } from "react";
import React from "react";
import { MaterialUISpan } from "../../../../Home.style";

export const SearchedTrackContainerTile = styled.div<{ isActive: boolean }>`
  display: flex;
  flex-direction: row;
  row-gap: 1rem;
  align-items: center;
  width: 30vw;
  cursor: pointer;
   background-color: ${(props) =>
    props.isActive ? global_styles.green : "transparent"};
  padding-left: 2rem;
  border-width: 1px;
  border-radius: 2rem;
  border-style: solid;
  border-color: ${global_styles.green};
  &:hover {
    background-color: ${global_styles.green};
  }
  overflow-x: hidden;
`;

export const SearchedTrackAndPlayButtonContainer = styled.div`
 display: flex ;
 justify-content: space-around;
 flex-direction: row;
 width: 90%;

`

export const SearchedTrackNameAndImageContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TrackCoverImage = styled.img`
  margin-right: 1rem;
`;
export const TrackNameField = styled.div`
  font-size: 1.5rem;
  font-weight: 600;
  padding: 0.5rem;
`;
export const TrackIDField = styled.div`
  font-size: 1rem;
  font-weight: 600;
  opacity: 0.7;
  padding: 0.5rem;
`;

export const TrackPlayButtonContainer = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 5rem;
  margin-right: 0;
  background-color: transparent;
  color:white;
  opacity: 0.5;
  border-width: 0;
  cursor: pointer;
  &hover{
    opacity: 1;
  }
`;

export const TrackPlayButton = (props: {
  onClick: MouseEventHandler<HTMLButtonElement>;
  isPlaying: boolean;
}) => {
  return (
    <TrackPlayButtonContainer onClick={props.onClick}>
      {props.isPlaying ? (
        <MaterialUISpan type={"stop_circle"} size={"3rem"}/>
      ) : (
        <MaterialUISpan type={"play_circle"} size={"3rem"} />
      )}
    </TrackPlayButtonContainer>
  );
};
