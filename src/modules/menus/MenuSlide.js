import React from "react";

export default function MenuSlide(props) {
    return (
        <div className="menu-slide">
            <div className="menu">
                <img className="menu-image" src={props.img} alt="MISSING MENU"/>
            </div>
        </div>
    );
}