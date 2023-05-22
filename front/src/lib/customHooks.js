import {useState, useEffect} from 'react';
import {getAuthenticatedUser, getGamesInfo} from './common';
import {useNavigate} from 'react-router-dom';
import {APP_ROUTES} from "../utils/constants";

export function useUser() {
    const [user, setUser] = useState(null);
    const [authenticated, setAuthenticated] = useState(false);
    const [isLoaded, setIsLoaded] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        async function getUserDetails() {
            const {authenticated, user} = await getAuthenticatedUser();
            if (!authenticated) {
                navigate(APP_ROUTES.SIGN_IN);
                return;
            }
            setUser(user);
            setAuthenticated(authenticated);
            setIsLoaded(true)
        }

        getUserDetails();
    }, []);

    return {user, authenticated, isLoaded};
}

export function useGameInfo() {

    const [isLoaded, setIsLoaded] = useState(false);
    const [gameInfo, setGameInfo] = useState(null);

    useEffect(() => {
        async function getGames(){
            const {gameInfo} = await getGamesInfo();
            console.log("useGame data")
            console.log(gameInfo)
            setGameInfo(gameInfo)
            setIsLoaded(true)
        }

        getGames();
    }, [])
    return {gameInfo, isLoaded}
}

export function useTicTacToe(){

}