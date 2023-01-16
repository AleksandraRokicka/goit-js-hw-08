import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);
const STORAGE_KEY = 'videoplayer-current-time';

const saveTimeUpdate = ({ seconds } = 0) => {
  localStorage.setItem(STORAGE_KEY, seconds);
};

const currentTime = () => {
  return localStorage.getItem(STORAGE_KEY) || 0;
};

player
  .setCurrentTime(currentTime())
  .then(function (data) {
    console.log(data);
  })
  .catch(function (err) {
    switch (error.name) {
      case 'RangeError':
        break;
      default:
        break;
    }
  });

player.on('timeupdate', throttle(saveTimeUpdate, 1000));
