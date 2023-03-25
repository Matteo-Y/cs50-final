import React from "react";
import useWindowSize from "./../WindowHook"

export default function RedirectCard(props) {
    const windowSize = useWindowSize();
    const [shrink, setShrink] = React.useState("");

    React.useEffect(() => {
        windowSize.width < 600 ? setShrink(" small") : setShrink("");
    }, [windowSize]);

    return (
        <div className={"image-card"+ shrink + " redirect-menu"}>
            <a 
                className={"link" + shrink}
                href={props.linkOne}
                target="_blank"
                rel="noreferrer noopener"
            >
                {props.msgOne}
                <img className={"h-9 link-icon" + shrink} src={props.iconOne} alt=""/>
            </a>
            <a 
                className={"link" + shrink}
                href={props.linkTwo}
                target="_blank"
                rel="noreferrer noopener"
            >
                {props.msgTwo}
                <img className={"h-9 link-icon" + shrink} src={props.iconTwo} alt="ai"/>
            </a>
        </div>
    );
}
