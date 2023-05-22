import Header from "../../components/Header";
import Footer from "../../components/Footer";
import TicTacToeGame from "../../components/TTTGame";

export default function TicTacToe() {
    return (
        <div>
            <Header/>
            <div>
                <TicTacToeGame/>
            </div>
            <Footer/>
        </div>
    );
}
