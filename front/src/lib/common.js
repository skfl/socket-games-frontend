import {API_ROUTES} from '../utils/constants';
import axios from 'axios';

export function storeTokenInLocalStorage(token) {
    localStorage.setItem('token', token);
}

export function getTokenFromLocalStorage() {
    return localStorage.getItem('token');
}

export function removeTokenFromLocalStorage() {
    localStorage.removeItem('token')
}

export async function getAuthenticatedUser() {
    const defaultReturnObject = {authenticated: false, user: null};
    try {
        const token = getTokenFromLocalStorage();
        if (!token) {
            return defaultReturnObject;
        }
        const response = await axios({
            method: 'GET',
            url: API_ROUTES.GET_USER,
            headers: {
                Authorization: "Bearer " + token
            }
        });
        defaultReturnObject.user = response.data.user;
        console.log(response.data.user);
        defaultReturnObject.authenticated = true;
        return defaultReturnObject;
    } catch (err) {
        console.log('getAuthenticatedUser, Something Went Wrong', err);
        return defaultReturnObject;
    }
}

export async function getGamesInfo() {
    const returnObject = {gameInfo: null}
    try {
        const response = await axios({
            method: "GET",
            url: API_ROUTES.GET_GAME_INFO,
            headers: {
                Authorization: "Bearer " + getTokenFromLocalStorage()
            }
        })
        returnObject.gameInfo = response.data.gameInfo
        console.log("returnObject")
        console.log(returnObject)
        return returnObject
    } catch (err) {
        console.log(err)
        return returnObject
    }
}