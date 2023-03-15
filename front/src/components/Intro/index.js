import React from "react";
import styles from "./Intro.module.scss"
import {
    Link
} from "react-router-dom";

function Intro() {
    return (
        <div className={styles.intro}>
            <div className={styles.textBlock}>
                <h1>Hey, play:<span>er</span></h1>
                <div className={styles.text}>
                    We are glad to see you on the website. Here you can play simple games with your
                    friends.Click
                    the button and start the battles right now
                </div>
                <Link to={"/play"}>
                    <button>Start now</button>
                </Link>
            </div>
            <img src={"/icons/animated-knight.svg"} alt={" "} width={500} height={500}></img>
        </div>
    );
}

export default Intro;