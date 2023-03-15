import React from "react";
import GameCard from "./components/GameCard";
import Main from "./pages/Main";
import {
    BrowserRouter as Router,
    Route,
    Link, Routes
} from "react-router-dom";
import About from "./pages/About";
import SignIn from "./pages/SignIn"
import SignUp from "./pages/SignUp";

const games = [
    {
        gameTitle: "Tic Tac Toe",
        gameIcon: "/icons/game/tic-tac-toe.svg",
        gameDescription: "A game in which two players seek in alternate turns to complete a row, a\n" +
            "                    column, or a diagonal with either three O's or three X's drawn in the spaces of a grid of nine\n" +
            "                    squares; noughts and crosses."
    },
    {
        gameTitle: "Coin flip",
        gameIcon: "/icons/game/coin-flip.svg",
        gameDescription: "Coin flipping, coin tossing, or heads or tails is the practice of throwing a coin in the air and checking which side is showing when it lands, in order to choose between two alternatives, heads or tails, sometimes used to resolve a dispute between two parties"
    }
];
{/*{games.map((obj) => <GameCard gameTitle={obj.gameTitle} gameIcon={obj.gameIcon}/>)}*/
}


function App() {


    return (<Router>
            <div className={"wrapper"}>
                <div className={"main"}>
                    <Routes>
                        <Route path={"/"} element={<Main/>}></Route>
                        <Route path={"/signIn"} element={<SignIn/>}></Route>
                        <Route path={"/signUp"} element={<SignUp/>}></Route>
                        <Route path={"/about"} element={<About/>}></Route>
                        <Route path={"/play"}
                               element={games.map((obj) => <GameCard gameTitle={obj.gameTitle} gameIcon={obj.gameIcon}
                                                                     gameDescription={obj.gameDescription}/>)}></Route>
                    </Routes>
                    {/*{games.map((obj) => <GameCard gameTitle={obj.gameTitle} gameIcon={obj.gameIcon} gameDescription={obj.gameDescription}/>)}*/}


                </div>
            </div>
        </Router>
    );
}

export default App;
