import React, { useEffect } from "react";
import { BannerText, LoginButton, MainContainer } from "./Welcome.style";
import { ROUTES } from "../RouterComponent";
import { Link, NavLink } from "react-router-dom";
import { authorize_with_spotify, verify_cookies } from "../../api/api_calls";


export const Welcome = () => {


    return (
        <MainContainer>
            <BannerText> Spotler </BannerText>
            <Link to={ROUTES.LOGIN}>
                <LoginButton>Authorize with Spotify</LoginButton>
            </Link>
        </MainContainer>
    )
}