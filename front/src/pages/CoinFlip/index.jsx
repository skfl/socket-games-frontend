import Header from "../../components/Header";
import Footer from "../../components/Footer";
import CoinFlipGame from "../../components/CoinflipGame";

export default function CoinFlip() {
    return (
        <div>
            <Header/>
            <div>
                <CoinFlipGame></CoinFlipGame>
            </div>
            <Footer/>
        </div>
    );
}
