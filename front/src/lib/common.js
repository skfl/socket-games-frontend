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
                Authorization: token,
                'Access-Control-Allow-Origin': 'http://localhost:8080'
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