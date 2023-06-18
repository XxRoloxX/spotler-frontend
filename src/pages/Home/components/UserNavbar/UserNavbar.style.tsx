import styled from "styled-components";
import global_styles from "../../../../assets/global-paramers.style";

export const NavbarContainer = styled.nav`
  display: flex;
  flex-direction: row;
  height: 3rem;
  font-size: 1rem;
  border-style: solid;
  border-width: 1px;
  border-color: white;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  justify-content: space-between;
  margin-top: 0.5rem;
`

export const UserProfileContainer = styled.div`
    display: flex;
    flex-direction: row;
    margin-right: 0.5rem;
    margin-left: 0.5rem;
`

export const UserAvatar = styled.img`
    border-radius: 50%;
    margin: 0.2rem;
    
`
export const UserName = styled.p`
    font-size: 1.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 2rem;
    color: white;
`

export const LogoutButton = styled.button`
    border-style: solid;
    border-width: 1px;
    border-color: ${global_styles.green};
    padding-left: 0.5rem;
    background-color: transparent;
    color: ${global_styles.green};
    border-radius: 2rem;
    width: 5rem;
    margin-left: 1rem;
    margin-right: 1rem;
    cursor: pointer;
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;

    &:hover {
        background-color: ${global_styles.green};
        color: white;
    }
`
export const SpotlerLogo =  styled.img`
    border-radius: 50%;
    margin: 0.2rem;
`

export const SpotlerName = styled.p`
    font-size: 1.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
`