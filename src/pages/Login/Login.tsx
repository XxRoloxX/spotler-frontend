import React from "react";
import { BannerDescription, BannerText, MainContainer } from "./Login.styles";
import { RedirectToSpotifyButton } from "./components/RedirectToSpotifyButton";

export const Login = () => {

    return <MainContainer>
        <BannerText>Why you need to authorize with spotify?</BannerText>
        <BannerDescription>
            🔒🔑🎵 Authenticating to use the Spotify API is crucial for several reasons. Firstly, it ensures data security and protects user privacy, represented by the lock emoji 🔒. By authenticating, Spotify can verify the identity of developers and restrict access to sensitive user information, ensuring a safe environment for everyone involved.

            🚀💡🔌 Moreover, authentication allows Spotify to control API usage and manage resources efficiently, represented by the rocket 🚀, lightbulb 💡, and plug 🔌 emojis. It enables developers to obtain access tokens, granting them limited and controlled access to Spotify's vast music catalog and various API functionalities.

            📊🎧💻 Lastly, authentication facilitates personalized user experiences and enhances the overall quality of Spotify applications, depicted by the chart emoji 📊, headphones 🎧, and computer 💻. By identifying and authorizing developers, Spotify can ensure that only legitimate and trusted applications interact with their API, leading to innovative features, seamless integrations, and a better user experience.</BannerDescription>
        <RedirectToSpotifyButton />
    </MainContainer>
}