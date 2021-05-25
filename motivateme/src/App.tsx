import React, {useState} from 'react';
import logo from './logo.svg';
import { FaPhotoVideo, FaRegLightbulb } from 'react-icons/fa';

import './App.css';


var random: number;

async function getNewUrl(){
  debugger;
  const response = await fetch('https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=PLStIAJ2xkB0sfTRdXNQ-aIeqWxzSOgBtS&key=AIzaSyDshUVKt-LXwfNPt6gkchEmFs-4AmYSDB0');
  const body = await response.json();
  const count = body.items.length;
  random = Math.floor(Math.random()*count);
}


function reloadPage(){
  window.location.reload();
}

function Videos() {
  getNewUrl();
  console.log(random);
  let vidUrl = "https://www.youtube.com/embed/videoseries?list=PLStIAJ2xkB0sfTRdXNQ-aIeqWxzSOgBtS&index="+random;


  return (
    <div className="App">
      <div className="vidContainer">
        <iframe id="vid" width="560" height="315" src={vidUrl} frameBorder="0" allowFullScreen></iframe>
      </div>

      <div><button onClick={reloadPage}><FaRegLightbulb color="#61dafb" size="2em"/></button></div>

      <div className="navBar">
        <div><FaPhotoVideo color="#61dafb" size="2em"/></div>
        <div><FaPhotoVideo color="#61dafb" size="2em"/></div>
        <div><FaPhotoVideo color="#61dafb" size="2em"/></div>
        <div><FaPhotoVideo color="#61dafb" size="2em"/></div>
      </div>
    </div>
  );
}


export default Videos;

