import GameCard from "../../components/GameCard";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import s from "./Play.module.scss"

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

    return (
        <div>
            <Header/>
            <div className={s.title}>Play</div>
            <div className={s.gameSection}>
                {games.map((obj, index) => (
                    <GameCard
                        key={index}
                        title={obj.gameTitle}
                        imgUrl={obj.gameIcon}
                        info={obj.gameDescription}/>))}
            </div>
            <Footer/>
        </div>

    );
}

export default Play;