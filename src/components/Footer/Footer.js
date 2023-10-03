import React from "react";
import './Footer.css';
import Logo from '../../img/Logo.svg';
import Linha from '../../img/linha.svg';
import facebook from '../../img/1.svg';
import instagram from '../../img/2.svg';
import twitter from '../../img/3.svg';
import pinterest from '../../img/4.svg';
import youtube from '../../img/5.svg';
import email from '../../img/6.svg';

export default () => {
    return (
        <footer>
            <img src={Logo} className="logo" />

            <ul className="pageLinks">
                <li>Sobre Nós</li>
                <li>Plante Verduras</li>
                <li>Plante Legumes</li>
            </ul>

            <img className="linha" src={Linha} />

            <ul className="socialMedia">
                <li><img src={facebook} /></li>
                <li><img src={instagram} /></li>
                <li><img src={twitter} /></li>
                <li><img src={pinterest} /></li>
                <li><img src={youtube} /></li>
                <li><img src={email} /></li>
            </ul>

            <p>&copy; 2023 Projeto Healthy-In. Todos os direitos reservados.</p>
        </footer>
    )
}