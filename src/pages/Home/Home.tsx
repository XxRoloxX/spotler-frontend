import React, { createContext, useContext, useEffect, useState } from "react";
import { MainContainer, TrackGenre, TrackGenresContainer } from "../Home/Home.style";
import { MaterialUISearchButton, } from "./Home.style";
import { get_track_genres } from "../../api/api_calls";
import { SearchBar } from "./components/MasterView/SearchBar/SearchBar";
import { MasterView } from "./components/MasterView/MasterView";
import { DetailedView } from "./components/DetailedView/DetailedView";
import { UserNavbar } from "./components/UserNavbar/UserNavbar";
import { Footer } from "./components/Footer/Footer";


export interface TrackInfo {
    id: string;
    name: string;
    image_url: string;
    preview_url: string;
}

export interface SelectedTrackContextProps {
    selectedTracks: TrackInfo[];
    setSelectedTracks: (track: TrackInfo[]|((arg:TrackInfo[])=>TrackInfo[])) => void;
}

const SelectedTrackContext = createContext<SelectedTrackContextProps>({ selectedTracks: [], setSelectedTracks: (arg) => { } });


export const useSelectedTrack = () => {
    return useContext(SelectedTrackContext);
}

export const Home = () => {

    const [selectedTracks, setSelectedTracks] = useState<TrackInfo[]>([])
    const [trackGenres, setTrackGenres] = useState({})

  
    useEffect(() => {
        console.log("SELECTED TRACK CONTEXT HAS CHANGED")
        console.table(selectedTracks)
        
    },[selectedTracks]);
    
    // useEffect(()=>{
    //     const music = new Audio()
    //     if(selectedTrack && selectedTrack.preview_url){
    //        music.src = selectedTrack.preview_url
    //        music.play()
    //     }  
    //     return () =>{
    //         music.pause()    
    //     }
    // },[selectedTrack])

    return (
        <SelectedTrackContext.Provider value={{selectedTracks, setSelectedTracks}}>
            <UserNavbar/>
            <MainContainer>
                <MasterView />
                <DetailedView/>
            </MainContainer>
            <Footer/>
        </SelectedTrackContext.Provider>
    )
}