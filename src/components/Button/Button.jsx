import React, { useState } from 'react';
import "./Button.css"
import { IoIosArrowForward } from "react-icons/io";

/**
 * @typedef {object} ButtonProps    
 * @property {Component} icon - icon to be displayed
 * @property {string} title - title to be displayed
 * @property {string} [subtitle] - subtitle to be displayed
 * @param {ButtonProps} props   
 */

const Button = ({ icon, title, subtitle }) => {
    const [isSelected, setIsSelected] = useState(false);

    const handleClick = () => {
        setIsSelected(!isSelected);
    };

    return (
        <div className={`container ${isSelected ? 'selected' : ''}`}>
            <div className="container-left">
                <div className="icon" >
                    {icon}
                </div>
                <div className="label-text" >
                    {title}
                </div>
            </div>
            <div className="container-right" onClick={handleClick}>
                <div className="subtitle" >
                    {subtitle}
                </div>
                <IoIosArrowForward className="arrow-icon" />
            </div>
        </div>
    );
}

export default Button