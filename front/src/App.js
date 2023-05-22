import React from "react";
import Main from "./pages/Main";
import {
    Route,
    Routes
} from "react-router-dom";
import About from "./pages/About";
import SignIn from "./pages/SignIn"
import SignUp from "./pages/SignUp";
import Play from "./pages/Play";
import {APP_ROUTES} from "./utils/constants";
import Profile from "./pages/Profile";
import TicTacToe from "./pages/TicTacToe";
import CoinFlip from "./pages/CoinFlip";

function App() {

    return (
        <div className={"wrapper"}>
            <div className={"main"}>
                <Routes>
                    <Route path={APP_ROUTES.HOME} element={<Main/>}></Route>
                    <Route path={APP_ROUTES.SIGN_IN} element={<SignIn/>}></Route>
                    <Route path={APP_ROUTES.SIGN_UP} element={<SignUp/>}></Route>
                    <Route path={APP_ROUTES.ABOUT} element={<About/>}></Route>
                    <Route path={APP_ROUTES.PLAY} element={<Play/>}></Route>
                    <Route path={APP_ROUTES.PROFILE} element={<Profile/>}></Route>
                    <Route path={APP_ROUTES.GAME_TTT} element={<TicTacToe/>}></Route>
                    <Route path={APP_ROUTES.GAME_COINFLIP} element={<CoinFlip/>}></Route>
                </Routes>
            </div>
        </div>

    );
}

export default App;
