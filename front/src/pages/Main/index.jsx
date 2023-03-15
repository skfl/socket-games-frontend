import Intro from "../../components/Intro";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import styles from "./Main.module.scss"
function Main() {
    return (
        <div className={styles.main}>
            <Header/>
            <div className={styles.introText}>
                <Intro/>
            </div>
            <Footer/>
        </div>
    );
}

export default Main;