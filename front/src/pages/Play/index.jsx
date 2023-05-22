import GameCard from "../../components/GameCard";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import s from "./Play.module.scss"
import {useGameInfo, useUser} from "../../lib/customHooks";
import {useState} from "react";

const games = [
    {
        gameTitle: "Tic Tac Toe",
        gameIcon: "/icons/game/tic-tac-toe.svg",
        gameDescription: "A game in which two players seek in alternate turns to complete a row, a column, or a diagonal with either three O's or three X's drawn in the spaces of a grid of nine squares; noughts and crosses."
    },
    {
        gameTitle: "Coin flip",
        gameIcon: "/icons/game/coin-flip.svg",
        gameDescription: "Coin flipping, coin tossing, or heads or tails is the practice of throwing a coin in the air and checking which side is showing when it lands, in order to choose between two alternatives, heads or tails, sometimes used to resolve a dispute between two parties"
    }
];

function Play() {

    const user = useUser();
    const gameInfo = useGameInfo();
    const [searchValue, setSearchValue] = useState('');

    const onInputChange = (event) => {
        setSearchValue(event.target.value)
    }

    return (
        <div>
            <Header/>
            {!gameInfo.isLoaded && <p>loading...</p>}
            {gameInfo.isLoaded && (
                <div className={s.wrapper}>
                    <div className={s.titleSearch}>
                        <div className={s.title}>{searchValue ? `Searching for : "${searchValue}"` : 'Play'}</div>
                        <div className={s.search}>
                            <img alt={" "} src={'/icons/search.svg'}></img>
                            <input placeholder={"Search..."} onChange={onInputChange} value={searchValue}></input>
                        </div>
                    </div>
                    <div className={s.gameSection}>
                        {gameInfo.gameInfo.filter(obj => obj.title.toLowerCase().includes(searchValue.toLowerCase())).map((obj, index) =>
                            (<GameCard
                                key={index}
                                title={obj.title}
                                imgUrl={obj.imgUrl}
                                info={obj.description}
                                playUrl={obj.playUrl}
                            />))}
                    </div>
                </div>)}
            <Footer/>
        </div>

    );
}

// {gameInfo.data.map((obj, index) => (
//     <GameCard
//         key={index}
//         title={obj.gameTitle}
//         imgUrl={obj.gameIcon}
//         info={obj.gameDescription}/>))}

export default Play;