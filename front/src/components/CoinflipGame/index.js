// CoinFlip.js

import React, { useState } from 'react';
import styles from './CoinFlip.module.scss';

const CoinFlip = () => {
    const [coinSide, setCoinSide] = useState(null);
    const [showPopup, setShowPopup] = useState(false);
    const [selectedSide, setSelectedSide] = useState(null);

    const handleFlip = () => {
        if (selectedSide) {
            setCoinSide(null);
            setShowPopup(false);

            setTimeout(() => {
                const randomNum = Math.floor(Math.random() * 2);
                const side = randomNum === 0 ? 'heads' : 'tails';

                setCoinSide(side);
                setShowPopup(side === selectedSide);
            }, 500);
        }
    };

    const handlePopupClose = () => {
        setShowPopup(false);
    };

    const handleSelectSide = (side) => {
        setSelectedSide(side);
    };

    return (
        <div className={styles['coin-flip']}>
            <h2>Coin Flip Game</h2>
            <div className={`${styles.coin} ${coinSide ? styles.flipping : ''}`}>
                <svg
                    className={`${styles['coin-side']} ${styles[coinSide]}`}
                    viewBox="0 0 150 150"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <circle className={styles['coin-circle']} cx="75" cy="75" r="70" />
                    <text className={styles['coin-text']} x="50%" y="50%">
                        {coinSide}
                    </text>
                </svg>
            </div>
            <div className={styles['selection-buttons']}>
                <button
                    className={`${styles['selection-button']} ${
                        selectedSide === 'heads' ? styles['selected'] : ''
                    }`}
                    onClick={() => handleSelectSide('heads')}
                >
                    Heads
                </button>
                <button
                    className={`${styles['selection-button']} ${
                        selectedSide === 'tails' ? styles['selected'] : ''
                    }`}
                    onClick={() => handleSelectSide('tails')}
                >
                    Tails
                </button>
            </div>
            <button
                className={styles['flip-btn']}
                onClick={handleFlip}
                disabled={!selectedSide}
            >
                Flip Coin
            </button>
            {showPopup && (
                <div className={styles.popup}>
                    <div className={styles['popup-content']}>
                        <h3>Congratulations!</h3>
                        <p>You win!</p>
                        <button className={styles['popup-close']} onClick={handlePopupClose}>
                            Close
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default CoinFlip;
