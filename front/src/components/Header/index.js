import styles from "./Header.module.scss"
import {
    Link
} from "react-router-dom";

function Header() {
    return (
        <div className={styles.header}>
            <div className={styles.logoBlock}>
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
                <p>Sock:<span>et</span></p>
            </div>
            <div className={styles.buttonSection}>
                <Link to={"/play"}><h1>Play</h1></Link>
                <Link to={"/learn"}><h1>Learn</h1></Link>
                <Link to={"/about"}><h1>About</h1></Link>
            </div>
            <div className={styles.usrIcon} title={"Profile page"}>
                <Link to={"/profile"}>
                    <svg viewBox="0 0 24 24" fill="black" height="60px" width="60px">
                        <g id="SVGRepo_tracerCarrier"></g>
                        <g id="SVGRepo_iconCarrier">
                            <rect width="24" height="24" fill="white"></rect>
                            <path
                                d="M6 8C6 4.68629 8.68629 2 12 2C15.3137 2 18 4.68629 18 8C18 11.3137 15.3137 14 12 14C8.68629 14 6 11.3137 6 8Z"></path>
                            <path
                                d="M5.43094 16.9025C7.05587 16.2213 9.2233 16 12 16C14.771 16 16.9351 16.2204 18.5586 16.8981C20.3012 17.6255 21.3708 18.8613 21.941 20.6587C22.1528 21.3267 21.6518 22 20.9592 22H3.03459C2.34482 22 1.84679 21.3297 2.0569 20.6654C2.62537 18.8681 3.69119 17.6318 5.43094 16.9025Z">

                            </path>
                        </g>
                    </svg>
                </Link>
            </div>

        </div>
    );
}

export default Header;