import React from "react";
import Logo from '../../img/Header.svg';
import './Header.css';

export default ({white}) => {
    return (
        <header className={white ? 'white' : ''}>
            <img src={Logo} className="img" alt="" />
        </header>
    );
}