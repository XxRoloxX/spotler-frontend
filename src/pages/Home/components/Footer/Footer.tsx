import React from "react"
import { FooterContainer } from "./Footer.style"
import { Link } from "react-router-dom"
import { ROUTES } from "../../../RouterComponent"

export const Footer = () => {


    return <FooterContainer>
        <Link to={ROUTES.INFO}>Used model</Link>
        <p>© 2023</p>
    </FooterContainer>
}