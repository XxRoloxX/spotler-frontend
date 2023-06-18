import React, { useState } from "react"
import { ViewChangeBarContainer, ViewOptionsContainer } from "./ViewChangeBar.style"
import { VIEWS, ViewsTypes } from "../DetailedView";

interface ViewChangeBarProps {
    selectedView: ViewsTypes;
    setSelectedView: (selectedView: ViewsTypes) => void;
}




export const ViewChangeBar = (props:ViewChangeBarProps)=>{

    const handleViewChange=(selectedView:ViewsTypes)=>(e:React.MouseEvent<HTMLElement>)=>{
        props.setSelectedView(selectedView)
    }

    return (
        <ViewChangeBarContainer>
            <ViewOptionsContainer isActive={props.selectedView===VIEWS.GENRES} onClick={handleViewChange(VIEWS.GENRES)}>Radar chart</ViewOptionsContainer>
            <ViewOptionsContainer isActive={props.selectedView===VIEWS.METADATA} onClick={handleViewChange(VIEWS.METADATA)}>Metadata</ViewOptionsContainer>
        </ViewChangeBarContainer>
    )   

}