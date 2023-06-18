import styled from "styled-components";
import global_styles from "../../../../../../assets/global-paramers.style";

export const SearchedTrackContainerTile = styled.div<{isActive:boolean}>`
    display: flex;
    flex-direction: row;
    row-gap: 1rem;
    align-items: center;
    cursor: pointer;
    width: 100%;
    background-color: ${props=> props.isActive?global_styles.green:"transparent"};
    padding-left: 2rem;
    border-width: 1px;
    border-radius: 2rem;
    border-style: solid;
    border-color: ${global_styles.green};
    &:hover{
        background-color: ${global_styles.green};
        
    }
`
export const SearchedTrackNameAndImageContainer = styled.div`
    display: flex;
    flex-direction: column;
`

export const TrackCoverImage = styled.img`
    margin-right: 1rem;

`
export const TrackNameField = styled.div`
    font-size: 1.5rem;
    font-weight: 600;
    padding: 0.5rem;
`
export const TrackIDField = styled.div`
    font-size: 1rem;
    font-weight: 600;
    opacity: 0.7;
    padding: 0.5rem;
`