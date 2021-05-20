import React from 'react';
import logo from './logo.svg';
import YoutubeEmbed from './YoutubeEmbed.js';
import './App.css';

function Videos() {
  return (
    <div className="App">
      <header className="App-header">
      <iframe id="vid" width="560" height="315" src="https://www.youtube.com/embed/videoseries?list=PLStIAJ2xkB0sfTRdXNQ-aIeqWxzSOgBtS" frameBorder="0" allowFullScreen></iframe>
      </header>
    </div>
  );
}


export default Videos;
