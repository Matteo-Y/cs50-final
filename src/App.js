import React from 'react';
import './App.css';
import './modules/Navbar.css';
import './modules/Sections.css';
import './modules/pictures/Pictures.css';
import './modules/menus/Menus.css';

import Navbar from './modules/Navbar.js';
import Pictures from './modules/pictures/Pictures.js';
import Menus from './modules/menus/Menus.js';

export default function App() {
  return (
    <div className="App">
      <div className="hero animated">
        <div className="logo animated">
          <img width="300px" height="300px" src={require('./res/ui/logo.jpg')} alt="logo"/>
        </div>
        <Navbar />
      </div>
      <Pictures />
      <Menus />
      <div id="about">

      </div>
      <div id="contacts">

      </div>
      <div id="footer">

      </div>
    </div>
  );
}