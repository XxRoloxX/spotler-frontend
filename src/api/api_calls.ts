import axios from "axios"

const API_URL = "http://localhost:8080" + '/api'

const VERIFY_COOKIES_ENDPOINT = "/verify-cookies"
const AUTHORIZE_WITH_SPOTIFY_ENDPOINT = "/authorize-with-spotify"
const GENRES_OF_TRACK_ENDPOINT = "/track-genres"
const SEARCH_TRACKS_ENDPOINT = "/search-tracks"
const USER_PROFILE_ENDPOINT = "/profile-info"
const DELETE_COOKIES_ENDPOINT = "/delete-cookies"
const TRACK_FEATURES_ENDPOINT = "/track-features"
const CLASSIFIER_INFO_ENDPOINT = "/classifier-info"

axios.defaults.baseURL = API_URL


const axiosInstance = axios.create({
    baseURL: API_URL,
    headers: {
            'Content-Type': 'application/json'
        },
    withCredentials: true
})

interface CookieStatus {
    cookie_status: boolean;
}

interface AuthorizationWithSpotifyProps {
    code:string,
}

export const verify_cookies = async () => {
    const response = await axiosInstance.get(VERIFY_COOKIES_ENDPOINT)
    return response
}

export const authorize_with_spotify = async (props: AuthorizationWithSpotifyProps) => {
    const response = await axiosInstance.post(AUTHORIZE_WITH_SPOTIFY_ENDPOINT, props)
    return response

}

export const get_track_genres = async (track_id:string) => {
    const response = await axiosInstance.get(GENRES_OF_TRACK_ENDPOINT + "?track_id=" + track_id)
    return response

}
export const search_tracks = async (track_name: string) => {
    const response = await axiosInstance.get(SEARCH_TRACKS_ENDPOINT + "?track_name=" +track_name)
    return response
}
export const get_tracks_genres = async (track_ids:string[]) => {
    const result = []
    for(const track_id of track_ids){
        const response = await axiosInstance.get(GENRES_OF_TRACK_ENDPOINT + "?track_id=" + track_id)
        result.push(response)
    }
    return result

}
export const get_user_profile = async () => {
    const response = await axiosInstance.get(USER_PROFILE_ENDPOINT)
    return response

}

export const delete_cookies = async () => {
    const response = await axiosInstance.put(DELETE_COOKIES_ENDPOINT)
    return response

}
export const get_track_features = async (track_id:string) => {
    const response = await axiosInstance.get(TRACK_FEATURES_ENDPOINT)
    return response
}
export const get_tracks_features = async (track_ids:string[]) => {
    const result = []
    for(const track_id of track_ids){
        const response = await axiosInstance.get(TRACK_FEATURES_ENDPOINT + "?track_id=" + track_id)
        result.push(response)
    }
    return result
}

export const get_classifier_info = async () => {
    const response = await axiosInstance.get("/classifier-info")
    return response

}