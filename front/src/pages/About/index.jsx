import Header from "../../components/Header";
import Footer from "../../components/Footer";
import styles from "./About.module.scss"

function About() {
    return (
        <div>
            <Header/>
            <div className={styles.textBlock}>
                <h1>About Sock:<span>et</span></h1>
                <div className={styles.text}>
                    <p>This platform is the result of educational activities. The source code is available on <a href="https://github.com/skfl" target="_blank">github</a></p>
                    <p>Technical stack : React, React Router, Spring Boot, Spring Security, PostgreSQL, Hibernate, Lombok, Mapstruckt</p>
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default About;