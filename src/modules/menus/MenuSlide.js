import React from "react";
import useWindowSize from "./../WindowHook";

export default function MenuSlide(props) {
    const windowSize = useWindowSize();
    const [className, setClassName] = React.useState("menu-slide");

    React.useEffect(() => {
        windowSize.width < 600 ? setClassName("menu-slide small") : setClassName("menu-slide");
    }, [windowSize]);

    return (
        <div className={className}>
            <img className="menu-image" src={props.img} alt="MISSING MENU" loading="lazy"/>
        </div>
    );
}