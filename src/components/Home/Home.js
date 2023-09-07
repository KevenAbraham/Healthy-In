import React from "react";
import './Home.css';
import bgHome from '../../img/home-background.png';

function Home() {
    return (
        <div className="home">
            <div className="text">
                <h1 className="title">Plante <span>Conosco</span></h1>

                <h3 className="subtitle">Junte-se ao Projeto Healthy-In e ajude a tornar o mundo mais <span>verde</span>!</h3>

                <button className="btnConheca">Conheça</button>
            </div>

            <img src={bgHome} className="bgHome" />
        </div>
    )
}

export default Home;