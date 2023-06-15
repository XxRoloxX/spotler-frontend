import React from "react";
import { BannerDescription, BannerText, MainContainer } from "./Login.styles";
import { RedirectToSpotifyButton } from "./components/RedirectToSpotifyButton";

export const Login = () => {

    return <MainContainer>
        <BannerText>Why you need to authorize with spotify?</BannerText>
        <BannerDescription>Reasons why you have to authorize: 12334</BannerDescription>
        <RedirectToSpotifyButton />
    </MainContainer>
}