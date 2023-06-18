import { useEffect } from "react"
import { authorize_with_spotify, verify_cookies } from "../../api/api_calls"
import { ROUTES } from "../RouterComponent"
import { Navigate } from "react-router-dom"
import React from "react"

export const RedirectFromSpotify = () => {

    useEffect(()=>{
        const queryset = new URLSearchParams(window.location.search)
        const code = queryset.get('code')
        console.log(code)
        if(code){
            const result = authorize_with_spotify({"code":code}).then(
                (res)=>{
                    window.location.replace(ROUTES.HOME)   
                }
            ).catch(err=>{
                verify_cookies().then(res=>{
                    console.log(res.data)
                    setTimeout(()=>window.location.replace(ROUTES.HOME),1000)
                })

            })
        }
        else{
            window.location.replace(ROUTES.LOGIN)
        }
    },[])

    return <></>

}