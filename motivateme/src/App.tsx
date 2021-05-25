import React, {useState} from 'react';
import logo from './logo.svg';
import { FaPhotoVideo, FaRegLightbulb } from 'react-icons/fa';

import './App.css';


let vidCount: number;

async function getVidCount(){
  const response = await fetch('https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=PLStIAJ2xkB0sfTRdXNQ-aIeqWxzSOgBtS&key=AIzaSyDshUVKt-LXwfNPt6gkchEmFs-4AmYSDB0');
  const body = await response.json();
  vidCount = body.items.length;
}


function swapVideos(){
  let random = Math.floor(Math.random()*vidCount);
  console.log(random);
  let videoEmbed = document.getElementById('vid');
  let vidUrl = "https://www.youtube.com/embed?listType=playlist&list=PLStIAJ2xkB0sfTRdXNQ-aIeqWxzSOgBtS&index="+random;
  console.log(vidUrl);
  videoEmbed?.setAttribute('src',vidUrl);
}

function Videos() {
  getVidCount();
  return (
    <div className="App">
      <div className="vidContainer">
        <iframe id="vid" width="560" height="315" src="https://www.youtube.com/embed?listType=playlist&list=PLStIAJ2xkB0sfTRdXNQ-aIeqWxzSOgBtS&index=0" frameBorder="0" allowFullScreen></iframe>
      </div>

      <div><button onClick={swapVideos}><FaRegLightbulb color="#61dafb" size="2em"/></button></div>

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

