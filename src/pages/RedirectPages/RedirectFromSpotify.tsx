import { useEffect } from "react"
import { authorize_with_spotify } from "../../api/api_calls"
import { ROUTES } from "../RouterComponent"
import { Navigate } from "react-router-dom"
import React from "react"

export const RedirectFromSpotify = () => {

    useEffect(()=>{
        const queryset = new URLSearchParams(window.location.search)
        const code = queryset.get('code')
        if(code){
            const result = authorize_with_spotify({"code":code})
            console.log(result)
        }
        else{
            window.location.replace("/")
        }
    },[])

    return <Navigate to={"/#"+ROUTES.HOME} replace={true}/>

}