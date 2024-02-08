import React from "react";
import './Header.css'


const Header = () => {
    return (
        <header>
            <div className="title">
                <h1>Get Premium</h1>
                <h2>unlock all the features</h2>
            </div>
            <div className="img-header">
                <img src="global-economy.webp" alt="premium" />
            </div>
        </header>
    );
}

export default Header;