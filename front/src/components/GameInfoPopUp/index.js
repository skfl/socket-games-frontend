import styles from "./GameInfoPopUp.module.scss"
import React from "react";

function GameInfoPopUp(props) {
    return (
        <div className={styles.gameInfoPopUp}>
            <div className={styles.messageBox}>
                <div className={styles.title}>
                    <h1>{props.title}</h1>
                        <svg onClick={props.onCrossClick} fill="#000000" viewBox="0 0 24 24" id="cross" width="30px" height="30px"
                             className="icon glyph">
                            <g id="SVGRepo_bgCarrier"></g>
                            <g id="SVGRepo_tracerCarrier"></g>
                            <g id="SVGRepo_iconCarrier">
                                <path
                                    d="M13.41,12l6.3-6.29a1,1,0,1,0-1.42-1.42L12,10.59,5.71,4.29A1,1,0,0,0,4.29,5.71L10.59,12l-6.3,6.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0L12,13.41l6.29,6.3a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42Z"></path>
                            </g>
                        </svg>
                </div>
                <div className={styles.description}>{props.description}</div>
            </div>
        </div>
    );
}

export default GameInfoPopUp;