import s from "./SignIn.module.scss"
import React from "react";
import {Link} from "react-router-dom";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import {storeTokenInLocalStorage} from "../../lib/common";
import {APP_ROUTES} from "../../utils/constants";
import {API_ROUTES} from "../../utils/constants";

function SignIn() {
    const navigate = useNavigate()
    const [username, setUsername] = React.useState()
    const [password, setPassword] = React.useState()
    const [failedLogin, setFailedLogin] = React.useState(false)
    const [isLoading, setIsLoading] = React.useState(false);
    const signIn = async () => {
        try {
            setIsLoading(true);
            const response = await axios({
                method: 'POST',
                url: API_ROUTES.SIGN_IN,
                data: {
                    username,
                    password
                }
            });
            console.log(!response?.data?.token)
            console.log(response)

            if (!response?.data?.token) {
                console.log('Something went wrong during signing in: ', response);
                setFailedLogin(true)
                return;
            }

            storeTokenInLocalStorage(response.data.token);
            navigate(APP_ROUTES.PROFILE)
        }
        catch (err) {
            console.log('Some error occured during signing in: ', err);
        }
        finally {
            setIsLoading(false);
        }
    };

    const onPasswordInputChange = (event) => {
        setFailedLogin(false)
        setPassword(event.target.value)
    }
    const onUsernameInputChange = (event) => {
        setFailedLogin(false)
        setUsername(event.target.value)
    }

    return (
        <div className={s.wrapper}>
            <div className={s.loginForm}>
                <div className={s.logoBlock}>
                    <Link to={"/"}>
                        <svg fill="#000000" height="150px" width="150px" version="1.1" id="Icons" viewBox="0 0 32 32">
                            <path
                                d="M7.2,16l1.1-0.2c1.6-0.3,3.3-0.5,5-0.7c-2.4,2.3-3.9,5.3-4.7,7.9h14.7c0.4-1.5,1.1-3,2.3-4.1l0.2-0.2 c0.2-0.2,0.3-0.4,0.3-0.6C26.6,13,24.2,8,19.8,5.3c-0.8-1.4-2-2.4-3.6-2.9l-0.9-0.3C15,2,14.7,2,14.4,2.2C14.2,2.4,14,2.7,14,3v2.4 l-1.4,0.7C12.2,6.3,12,6.6,12,7v0.5l-4.7,3.1C6.5,11.1,6,12.1,6,13.1V15c0,0.3,0.1,0.6,0.4,0.8C6.6,16,6.9,16,7.2,16z">
                            </path>
                            <path
                                d="M6.8,25C6.3,25.5,6,26.2,6,27v2c0,0.6,0.4,1,1,1h18c0.6,0,1-0.4,1-1v-2c0-0.8-0.3-1.5-0.8-2H6.8z">
                            </path>
                        </svg>
                    </Link>
                    <p>Sign:<span>in</span></p>
                </div>
                <div className={s.data}>

                    <div className={failedLogin ? s.formFailed : s.form}>
                        <label htmlFor={"username"}>Username</label>
                        <input type={"text"} id={"username"} name={"username"} onChange={onUsernameInputChange}
                               placeholder={"Enter your username"}></input>
                        <label htmlFor={"password"}>Password</label>
                        <input type={"password"} id={"password"} name={"password"} onChange={onPasswordInputChange}
                               placeholder={"Enter your password"}></input>
                        <button onClick={signIn}>Sign in</button>
                    </div>
                </div>
                {failedLogin ? <div className={s.failedLogin}>Wrong username or password </div> : null}
                <p>don't have an account <Link to={"/signUp"}>sign up</Link></p>
            </div>
        </div>
    );
}

export default SignIn;