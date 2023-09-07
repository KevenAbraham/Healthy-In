import React from "react";
import Logo from '../../img/Header.svg';
import './Header.css';

function Header() {
    return (
        <div className="header">
            <img src={Logo} className="img" alt="" />
        </div>
    );
}

export default Header;