import React, { useContext, useEffect, useState } from "react"
import { Component } from "react"
import { verify_cookies } from "../../api/api_calls"
import { Navigate, useLocation, useNavigate } from "react-router-dom"
import { ROUTES } from "../../pages/RouterComponent"


interface AuthContextProps {

    isAuthenticated: boolean,
    handleAuthentication: (arg: boolean) => void
}


const AuthContext = React.createContext<AuthContextProps | null>(null)

export const useAuth = () => {
    return useContext(AuthContext)
}

export const AuthProvider = (props: { children: React.ReactNode }) => {

    const [isAuthenticated, setIsAuthenticated] = useState(false)


    const value = {
        isAuthenticated: isAuthenticated,
        handleAuthentication: setIsAuthenticated
    }


    return (
        <AuthContext.Provider value={value}>
            {props.children}
        </AuthContext.Provider>
    )
}

export const ProtectedRoute = (props: { children: React.ReactNode }) => {
    const isAuthenticated = useAuth()
    const navigate = useNavigate()

    useEffect(() => {

        verify_cookies().then(
            (response) => {
                if (response.data.cookie_status == true) {
                    isAuthenticated?.handleAuthentication(true)   
                }
                else{
                    navigate(ROUTES.LOGIN)
                }
            }
        )
        console.log("USE EFFECT IN AUTH PROVIDER")

    },[])

    return props.children
}