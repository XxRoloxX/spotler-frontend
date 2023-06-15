import React, { useContext, useEffect, useState } from "react"
import { Component } from "react"
import { verify_cookies } from "../../api/api_calls"
import { Navigate } from "react-router-dom"
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


    useEffect(() => {

        verify_cookies().then(
            (response) => {
                if (response.data.is_cookie_active === true) {
                    console.log("Cookie is active")
                    setIsAuthenticated(true)
                }
            }
        )

    })

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
    console.log("Cookies: "+isAuthenticated?.isAuthenticated)
    if (!isAuthenticated?.isAuthenticated) {
        return <Navigate to={ROUTES.WELCOME} replace={true} />
    }

    return props.children
}