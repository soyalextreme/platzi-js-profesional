import MediaPlayer from './MediaPlayer.js';
// plugins
import AutoPlay from "./plugins/AutoPlay.js"


const video = document.querySelector('video');
const player = new MediaPlayer({ el: video, plugins: [
  new AutoPlay(),
] });

const button = document.querySelector('#play');
const buttonMute = document.querySelector('#mute');
buttonMute.onclick = ()=> player.changeMuteStatus();
button.onclick = () => player.togglePlay();
