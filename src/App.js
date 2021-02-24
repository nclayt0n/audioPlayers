import React, { useState } from "react";
import "./App.css";
import HowlerJs from "./Howler";
import WaveSurfer from "./WaveSurfer";
import audio1 from "./audio/sound1.webm";
import audio2 from "./audio/sound2.mp3";

function App() {
  let trackList = [audio1, audio2];
  return (
    <>

      <HowlerJs />
      {trackList.map((track,idx)=><WaveSurfer audio={track} index={idx}/>)}
    </>
  );
}

export default App;
