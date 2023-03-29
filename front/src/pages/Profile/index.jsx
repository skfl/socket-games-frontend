import {useUser} from "../../lib/customHooks";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import {removeTokenFromLocalStorage} from "../../lib/common";
import {useNavigate} from 'react-router-dom';
import {APP_ROUTES} from "../../utils/constants";
import s from "./Profile.module.scss"
import {useEffect} from "react";

function Profile() {
    const user = useUser();
    const navigate = useNavigate()
    const handleLogout = () => {
        removeTokenFromLocalStorage()
        navigate(APP_ROUTES.HOME)
    }
    console.log(user)
    return (
        <div>
            <Header/>
            {!user.isLoaded && <p>loading...</p>}
            {user.isLoaded && (<div className={s.profilePageWrap}>
                <div className={s.mainTitle}>
                    Profile
                    <div className={s.info}>
                        Username: {user.user.username}
                        <br></br>
                        Email: {user.user.email}
                    </div>
                    <button onClick={handleLogout}>Logout</button>
                </div>
            </div>)}
            <Footer/>
        </div>
    );
}

export default Profile