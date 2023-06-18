import { useEffect, useState } from "react";
import { InfoPageContainer, InfoPageTitle, InfoTextContainer, InfoTileContainer } from "./InfoPage.style";
import React from "react";
import { get_classifier_info } from "../../api/api_calls";

interface ClassifierInfo {
    parametersId: string
    generationData: string;
    balancedAccuracyScore: number;
    accuracyScore: number;
    topKAccuracyScore: number;
    isActive: boolean;
    modelId: number

}


export const InfoPage = () => {
    const [classifierInfo, setClassifierInfo] = useState<ClassifierInfo|null>(null)

    useEffect(() => {
        get_classifier_info().then(res => {
            setClassifierInfo(res.data)
        })

    },[])

    return (
        <InfoPageContainer>
            <InfoPageTitle>
                Info about used classifier
            </InfoPageTitle>
        {!classifierInfo?"":Object.entries(classifierInfo).map(([key, value])=>{

            return <InfoTileContainer>
                <InfoTextContainer>
                    {key+":"}
                </InfoTextContainer>
                <InfoTextContainer>
                    {value}
                </InfoTextContainer>
            </InfoTileContainer>
        })} 
        </InfoPageContainer>
    )


}