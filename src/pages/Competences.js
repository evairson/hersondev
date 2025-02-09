import CompetencesInfo from "../components/CompetencesInfo";
import Header from "../components/header/Header";
import { Pages } from "../constants/constants";

const Competences = () => {
    return (
        <div className="competences">
        <Header activeIndex={Pages.COMPETENCES}/>
        <h1>Competences</h1>
        <CompetencesInfo icon="website">
            <h2 id="web">Web Development</h2>
            <p> Frontend : HTML, CSS, ReactJS, TailwindCSS, Wordpress, PHP </p>
            <p> Backend : Javascript, Firebase, Flask, PHP </p>
        </CompetencesInfo>
        <CompetencesInfo icon="mobile">
            <h2 id="mobile">Mobile Development</h2>
            <p> Android : Java, Kotlin </p>
            <p> iOS : Swift </p>
            <p> Cross-platform : React Native, Flutter </p>
        </CompetencesInfo>
        <CompetencesInfo icon="blockchain">
            <h2 id="blockchain">Blockchain</h2>
            <p> Blockchain : Ethereum, XRPL, Polkadot </p>
            <p> Smart Contract : Solidity, Rust </p>
        </CompetencesInfo>
        <CompetencesInfo icon="programming">
            <h2 id="other">Other</h2>
            <p> Programming : Python, Java, C </p>
            <p> Data : MySQL, Firebase, Pandas, Numpy </p>
            <p> AI : Tensorflow, Keras </p>
            <p> Game : Construct, Unity, Java </p>
            <p> Robotique : Arduino, micro:bit </p>
            <p> Other : Bot Discord Python </p>
            <p> 3D : Nomad Sculpt </p> 
        </CompetencesInfo>

        </div>
    );
}

export default Competences;