import React, { useEffect } from "react";
import { BannerText, LoginButton, MainContainer } from "./Welcome.style";
import { ROUTES } from "../RouterComponent";
import { Link, NavLink } from "react-router-dom";
import { authorize_with_spotify, verify_cookies } from "../../api/api_calls";


export const Welcome = () => {

    useEffect(() => {
        const queryset = new URLSearchParams(window.location.search)
        const code = queryset.get('code')
        console.log("RUN USEEFFECTS")
        if (code) {
            console.log(code)
            authorize_with_spotify({ "code": code }).then(result => {
                console.log("RESULTS: " + result)
                window.location.href = ("/#" + ROUTES.HOME)
            }).catch(err => { console.log("ERROR: " + err) })
        }
        else {
            verify_cookies().then(result => { 
                result.data.cookie_status == true ? window.location.href = ("/#" + ROUTES.HOME) : window.location.href })
        }

    }, [])


    return (
        <MainContainer>
            <BannerText> Spotler </BannerText>
            <Link to={ROUTES.LOGIN}>
                <LoginButton>Authorize with Spotify</LoginButton>
            </Link>
        </MainContainer>
    )
}