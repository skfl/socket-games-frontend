import s from "./SignUp.module.scss"
import {Link} from "react-router-dom";
import {useForm} from "react-hook-form";
import {API_ROUTES, APP_ROUTES, VALIDATE_PATTERNS} from "../../utils/constants";
import {useNavigate} from "react-router-dom";
import axios from "axios";
import {useState} from "react";

function SignUp() {

    const {register, handleSubmit, watch, formState: {errors}} = useForm();
    const [failedSignUp, setFailedSignUp] = useState(false);
    const [failedMessage, setFailedMessage] = useState("");
    const navigate = useNavigate();

    const signUp = async (formData) => {
        console.log(formData)
        try {
            const response = await axios({
                data: JSON.stringify(formData),
                method: "POST",
                url: API_ROUTES.SIGN_UP,
                headers: {
                    "Content-Type": "application/json"
                }
            })
            navigate(APP_ROUTES.SIGN_IN)
        } catch (err) {
            setFailedSignUp(true)
            if (err.code === "ERR_BAD_REQUEST") {
                setFailedMessage(err.response.data.message)
            }else {
                setFailedMessage("Unknown error")
            }
        }
    }

    return (
        <div className={s.wrapper}>
            <div className={s.signUpForm}>
                <div className={s.logoBlock}>
                    <Link to={APP_ROUTES.HOME}>
                        <svg fill="#000000" height="150px" width="150px" version="1.1" id="Icons" viewBox="0 0 32 32">
                            <path
                                d="M7.2,16l1.1-0.2c1.6-0.3,3.3-0.5,5-0.7c-2.4,2.3-3.9,5.3-4.7,7.9h14.7c0.4-1.5,1.1-3,2.3-4.1l0.2-0.2 c0.2-0.2,0.3-0.4,0.3-0.6C26.6,13,24.2,8,19.8,5.3c-0.8-1.4-2-2.4-3.6-2.9l-0.9-0.3C15,2,14.7,2,14.4,2.2C14.2,2.4,14,2.7,14,3v2.4 l-1.4,0.7C12.2,6.3,12,6.6,12,7v0.5l-4.7,3.1C6.5,11.1,6,12.1,6,13.1V15c0,0.3,0.1,0.6,0.4,0.8C6.6,16,6.9,16,7.2,16z">
                            </path>
                            <path
                                d="M6.8,25C6.3,25.5,6,26.2,6,27v2c0,0.6,0.4,1,1,1h18c0.6,0,1-0.4,1-1v-2c0-0.8-0.3-1.5-0.8-2H6.8z">
                            </path>
                        </svg>
                    </Link>
                    <p>Sign:<span>up</span></p>
                </div>
                {failedSignUp ? <div className={s.validateErrMessage}>{failedMessage}</div> : null}
                <div className={s.data}>
                    <form onSubmit={handleSubmit(signUp)}>

                        <label htmlFor={"email"}>Email</label>
                        <input type={"email"} id={"email"} name={"email"}
                               placeholder={"Enter your email"} {...register("email", {
                            required: true,
                            pattern: VALIDATE_PATTERNS.EMAIL
                        })} aria-invalid={errors.email ? "true" : "false"}
                        ></input>
                        {errors.email?.type === 'required' &&
                            <div className={s.validateErrMessage}>Email is required</div>}
                        {errors.email?.type === 'pattern' && <div className={s.validateErrMessage}>Email invalid</div>}

                        <label htmlFor={"username"}>Username</label>
                        <input type={"text"} id={"username"} name={"username"}
                               placeholder={"Enter your username"} {...register("username", {
                            required: true,
                            pattern: VALIDATE_PATTERNS.USERNAME
                        })} aria-invalid={errors.username ? "true" : "false"}
                        ></input>
                        {errors.username?.type === 'required' &&
                            <div className={s.validateErrMessage}>Username is required</div>}
                        {errors.username?.type === 'pattern' &&
                            <div className={s.validateErrMessage}>Username invalid</div>}

                        <label htmlFor={"password"}>Password</label>
                        <input type={"password"} id={"password"} name={"password"}
                               placeholder={"Enter your password"} {...register("password", {
                            required: true,
                            pattern: VALIDATE_PATTERNS.PASSWORD
                        })} aria-invalid={errors.password ? "true" : "false"}
                        ></input>
                        {errors.password?.type === 'required' &&
                            <div className={s.validateErrMessage}>Password is required</div>}
                        {errors.password?.type === 'pattern' &&
                            <div className={s.validateErrMessage}>Password invalid</div>}

                        <button type={"submit"}>Sign up</button>
                    </form>
                </div>
                <p>already have an account <Link to={APP_ROUTES.SIGN_IN}>sign in</Link></p>
            </div>
        </div>
    );
}

export default SignUp;