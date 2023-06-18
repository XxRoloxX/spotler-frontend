import React, { useEffect } from "react";
import { BannerDescription, BannerText, MainContainer } from "./Login.styles";
import { RedirectToSpotifyButton } from "./components/RedirectToSpotifyButton";
import { authorize_with_spotify, verify_cookies } from "../../api/api_calls";
import { ROUTES } from "../RouterComponent";

export const Login = () => {
  // useEffect(() => {
  //         const queryset = new URLSearchParams(window.location.search)
  //         const code = queryset.get('code')
  //         console.log("RUN USEEFFECTS")
  //         if (code) {
  //             console.log(code)
  //             authorize_with_spotify({ "code": code }).then(result => {
  //                 console.log("RESULTS: " + result)
  //                 window.location.href = (ROUTES.HOME)
  //             }).catch(err => { console.log("ERROR: " + err) })
  //         }
  //         else {
  //             verify_cookies().then(result => {
  //                 result.data.cookie_status == true ? window.location.href = (ROUTES.HOME) : window.location.href })
  //         }

  //     }, [])

  useEffect(() => {
    verify_cookies().then((result) => {
      result.data.cookie_status == true
        ? (window.location.href = ROUTES.HOME)
        : window.location.href;
    });
  }, []);

  return (
    <MainContainer>
      <BannerText>Why you need to authorize with spotify?</BannerText>
      <BannerDescription>
        🔒🔑🎵 Authenticating to use the Spotify API is crucial for several
        reasons. Firstly, it ensures data security and protects user privacy,
        represented by the lock emoji 🔒. By authenticating, Spotify can verify
        the identity of developers and restrict access to sensitive user
        information, ensuring a safe environment for everyone involved. 🚀💡🔌
        Moreover, authentication allows Spotify to control API usage and manage
        resources efficiently, represented by the rocket 🚀, lightbulb 💡, and
        plug 🔌 emojis. It enables developers to obtain access tokens, granting
        them limited and controlled access to Spotify's vast music catalog and
        various API functionalities. 📊🎧💻 Lastly, authentication facilitates
        personalized user experiences and enhances the overall quality of
        Spotify applications, depicted by the chart emoji 📊, headphones 🎧, and
        computer 💻. By identifying and authorizing developers, Spotify can
        ensure that only legitimate and trusted applications interact with their
        API, leading to innovative features, seamless integrations, and a better
        user experience.
      </BannerDescription>
      <RedirectToSpotifyButton />
    </MainContainer>
  );
};
