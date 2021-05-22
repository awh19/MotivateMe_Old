import React from 'react';
import logo from './logo.svg';
import { FaPhotoVideo } from 'react-icons/fa'
import { NavigationContainer } from 'react-navigation';
import './App.css';

function Videos() {
  return (
    <div className="App">
      <div className="vidContainer">
        <iframe id="vid" width="560" height="315" src="https://www.youtube.com/embed/videoseries?list=PLStIAJ2xkB0sfTRdXNQ-aIeqWxzSOgBtS" frameBorder="0" allowFullScreen></iframe>

      </div>

      <div className="navBar">
        <div><FaPhotoVideo color="blue" size="2em"/></div>
        <div><FaPhotoVideo color="blue" size="2em"/></div>
        <div><FaPhotoVideo color="blue" size="2em"/></div>
        <div><FaPhotoVideo color="blue" size="2em"/></div>
      </div>


      
    </div>
  );
}


export default Videos;
