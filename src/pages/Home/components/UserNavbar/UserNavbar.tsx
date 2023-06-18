import React, { useEffect, useState } from "react"
import { LogoutButton, NavbarContainer, SpotlerLogo, SpotlerName, UserAvatar, UserName, UserProfileContainer } from "./UserNavbar.style"
import { delete_cookies, get_user_profile } from "../../../../api/api_calls"
import { useNavigate } from "react-router-dom"
import { ROUTES } from "../../../RouterComponent"
//const SPOTLER_LOGO_PATH = "../../../../assets/images/spotler-logo.png"
import spotlerLogo from "./spotlerLogo.png";

interface UserProfile {
    displayName: string,
    imageUrl: string
}

export const UserNavbar = () => {
    const [userProfile, setUserProfile] = useState<UserProfile>({displayName:"", imageUrl:""})
    const navigate = useNavigate()

    useEffect(() => {
        get_user_profile().then(
            response => {
                console.log(response.data)
                setUserProfile({displayName: response.data.display_name, imageUrl: response.data["images"][0]["url"]})
                
            }
        )
    }, [])

    const handleLogout = () => {
        delete_cookies()
        navigate(ROUTES.WELCOME)
    }

    return (
        <NavbarContainer>
            <UserProfileContainer>
            <SpotlerLogo src={spotlerLogo} width={"50px"}/>
            <SpotlerName>Spotler</SpotlerName>
            </UserProfileContainer>
            <UserProfileContainer>
                <UserName>{userProfile.displayName}</UserName>
                <UserAvatar src={userProfile.imageUrl} width={"50px"}/>
                <LogoutButton onClick={handleLogout}>Logout</LogoutButton>
            </UserProfileContainer>
        </NavbarContainer>
    )


}