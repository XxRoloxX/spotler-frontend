import React from "react"
import { LoginButton } from "../Login.styles"


const RESPONSE_TYPE = "code"
const CLIENT_ID = "1887458e0b984c799d0b33b320fbf25e"
const SCOPE = "user-read-private user-top-read playlist-read-collaborative"
const REDIRECT_URI = "http://localhost:3000/spotify-redirect"
const STATE = ""

const SPOTIFY_AUTHORIZATION_URL = `https://accounts.spotify.com/authorize?response_type=${RESPONSE_TYPE}&client_id=${CLIENT_ID}&scope=${SCOPE}&redirect_uri=${REDIRECT_URI}`


export const RedirectToSpotifyButton = () => {

    const redirectToSpotify = () => {
        window.location.href = encodeURI(SPOTIFY_AUTHORIZATION_URL)
    }


    return <LoginButton onClick={redirectToSpotify}>
        Redirect to Spotify
    </LoginButton>


}