import React from "react";
import './Footer.css';
import Logo from '../../img/Logo.svg';
import Linha from '../../img/linha.svg';

export default () => {
    return (
        <footer>
            <img src={Logo} className="logo" />

            <ul className="pageLinks">
                <li>Sobre Nós</li>
                <li>Plante Verduras</li>
                <li>Plante Legumes</li>
            </ul>

            <img src={Linha} />

            <ul className="socialMedia">
                <li>Facebook</li>
                <li>Instagram</li>
                <li>Twitter</li>
                <li>Pinterest</li>
                <li>Youtube</li>
                <li>Email</li>
            </ul>

            <p>&copy; 2023 Projeto Healthy-In. Todos os direitos reservados.</p>
        </footer>
    )
}