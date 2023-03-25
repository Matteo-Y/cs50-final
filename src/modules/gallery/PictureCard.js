import React from 'react';
import useWindowSize from "./../WindowHook"

const PictureCard = React.memo(function PictureCard(props) {
    const windowSize = useWindowSize();
    const [imgSrc, setImgSrc] = React.useState(null);
    const [className, setClassName] = React.useState("image-card");

    React.useEffect(() => {
        const image = new Image();
        image.onload = () => {
        setImgSrc(props.img);
        };
        image.src = props.img;
    }, [props.img]);

    React.useEffect(() => {
        windowSize.width < 600 ? setClassName("image-card small") : setClassName("image-card");
    }, [windowSize]);

    return (
        <div className={className}>
        {imgSrc ? (
            <img className="image" src={imgSrc} alt=""/>
        ) : (
            <div className="loading">Loading...</div>
        )}
        </div>
    );
});

export default PictureCard;

