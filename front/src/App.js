import Index from "./components/Header";
import Footer from "./components/Footer";
import GameCard from "./components/GameCard";

const games = [
    {gameTitle: "Tic Tac Toe", gameIcon: "/icons/game/tic-tac-toe.svg"},
    {gameTitle: "Coin flip", gameIcon: "/icons/game/coin-flip.svg"}
];

function App() {
    return (<div className={"wrapper"}>
            <Index/>
            <div className={"main"}>
                {games.map((obj) => <GameCard gameTitle ={obj.gameTitle} gameIcon={obj.gameIcon}/>)}
            </div>
            <Footer/>
        </div>
    );
}

export default App;
