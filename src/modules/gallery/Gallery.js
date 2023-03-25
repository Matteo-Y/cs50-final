import React, { useState, useEffect } from 'react';

import PictureCard from './PictureCard';
import RedirectCard from './RedirectCard';

export default function Gallery() {
    const galleryRef = React.useRef(null)
    const [expanded, setExpanded] = useState(true);
    const [loadedPictures, setLoadedPictures] = useState([]);
    const pictures = React.useMemo(() => [
      'scones.jpg',
      'donuts_oldFashion.jpg',
      'woopy_pie.jpg',
      'platter.jpg',
      'bagged_cookies.jpg',
      'cheese_platter.jpg',
      'brownies.jpg',
      'display.jpg',
      'ginger_bread.jpg',
      'mozza.jpg',
      'pie.jpg'
    ], []);

    useEffect(() => {setExpanded(false)},[]);

    useEffect(() => {
      const images = pictures.map((pic, index) => {
        const image = new Image();
        image.src = require('./../../res/pics/' + pic);
        return image;
      });
      Promise.all(images.map((image) => image.decode())).then(() => {
        setLoadedPictures(images);
      });
    }, [pictures]);

    function handleExpansion() {
      setExpanded(!expanded);
      if(expanded) galleryRef.current.scrollIntoView({behavior: 'smooth'});
    }

    function getPictures() {
      return loadedPictures.map((picture, index) => (
        <PictureCard img={picture.src} key={index} />
      ));
    }

    return (
      <div id="gallery" ref={galleryRef} className={expanded ? "expanded" : ""}>
        <h1 className="title">GALLERY</h1>
        <div className="content gallery">
          {getPictures()}
          <RedirectCard 
            linkOne="https://yelp.to/QLXNFTmYJxb"
            msgOne="Rate us"
            iconOne={require("./../../res/ui/yelp.png")}
            linkTwo="https://www.facebook.com/profile.php?id=100085895066844&mibextid=LQQJ4d"
            msgTwo="See more on"
            iconTwo={require("./../../res/ui/fb_icon.png")}
          />
        </div>
        <button className="expand-toggle" onClick={handleExpansion}>=</button>
      </div>
    );
}

