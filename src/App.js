import React from 'react';
import { Element } from 'react-scroll';
import './styles/App.css';

import NavButton from './modules/NavButton';
import Gallery from './modules/gallery/Gallery';
import Menus from './modules/menus/Menus';

export default function App() {
  const galleryRef = React.useRef(null);
  const menusRef = React.useRef(null);
  const contactsRef = React.useRef(null);

  const [rendered, setRendered] = React.useState(false);

  React.useEffect(() => {
    setTimeout(() => {
      setRendered(true);
    }, 1000);
  }, []);

  return (
    <>
      <h1 className={rendered ? 'hidden' : ''}>Loading...</h1>
      <div className={rendered ? '' : 'hidden'}>
        <div className="hero">
          <div className="logo mx-auto">
            <img width="300px" height="300px" src={require('./res/ui/logo.jpg')} alt="logo"/>
          </div>
          <div className="nav">
            <NavButton targetElement={galleryRef} name="GALLERY"/>
            <NavButton targetElement={menusRef} name="MENUS"/>
            <NavButton targetElement={contactsRef} name="CONTACTS"/>
          </div>
        </div>
        <Element name="GALLERY"><Gallery assignedRef={galleryRef}/></Element>
        <Element name="MENUS"><Menus assignedRef={menusRef}/></Element>
        <Element name="CONTACTS"><div id="contacts" ref={contactsRef}>
          <h1 className="title">CONTACTS AND LINKS</h1>
          <div className="content">
            <div className="pfp-container">
              <img className="pfp" src={require("./res/pics/julia_pfp.jpg")} alt="PROFILE PIC"/>
            </div>
            <div className="contact-form">
              <p className="contact-header">Julia Roopenian</p>
              <div className="contact-section">
                <img className="h-10 m-2" src={require("./res/ui/phone.png")} alt="" loading="lazy"/>
                <p className="contact-details my-4">(603) 554-0362</p>
                <img className="h-10 m-2" src={require("./res/ui/mail.png")} alt="" loading="lazy"/>
                <p className="contact-details my-4">order@dalessiosbakery.com</p>
                <img className="h-10 m-2" src={require("./res/ui/fb_icon.png")} alt="" loading="lazy"/>
                <a className="contact-details my-4" href="https://www.facebook.com/profile.php?id=100085895066844&mibextid=LQQJ4d" target="_blank" rel="noreferrer noopener">Dalessios Bakery</a>
                <img className="h-10 m-2" src={require("./res/ui/yelp.png")} alt="" loading="lazy"/>
                <a className="contact-details my-4" href="https://www.yelp.com/biz/dalessios-bakery-canyon-lake?utm_source=ishare" target="_blank" rel="noreferrer noopener">Dalessios Bakery</a>
              </div>
            </div>
          </div>
        </div></Element>
      </div>
    </>
  );
}