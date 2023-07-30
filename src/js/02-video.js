import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframeELement = document.querySelector('iframe');
const CURRENT_TIME = 'videoplayer-current-time';
let currentTime = localStorage.getItem(CURRENT_TIME || 0);

const player = new Player(iframeELement);
player.on('timeupdate', throttle(getCurrentTime, 1000));

setTimePlayer(currentTime);

function getCurrentTime(data) {
  currentTime = data.seconds;
  localStorage.setItem('CURRENT_TIME', data.seconds);
}

function setTimePlayer(time) {
  player.setCurrentTime(time);
}
