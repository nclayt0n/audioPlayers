import {Howl, Howler} from 'howler';
import audio1 from './audio/sound1.webm';
import audio2 from './audio/sound2.mp3';

const HowlerJs = props => {
    const sound=new Howl({
        sprite: {
          src: [audio1, audio2]
        },
      });
    return (
        <div className="App">
        <button onClick={()=>sound.play()}>Play</button>
         </div>
    );
};

export default HowlerJs;
