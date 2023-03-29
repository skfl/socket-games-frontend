import {useState, useEffect} from 'react';
import {getAuthenticatedUser} from './common';
import {useNavigate} from 'react-router-dom';
import {APP_ROUTES} from "../utils/constants";

export function useUser() {
    const [user, setUser] = useState(null);
    const [authenticated, setAuthenticated] = useState(false);
    const [isLoaded, setIsLoaded] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        async function getUserDetails() {

            console.log("useUser effect")
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