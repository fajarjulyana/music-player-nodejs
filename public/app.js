const playButton = document.querySelector('.play-button');
const stopButton = document.querySelector('.stop-button');
const audio = new Audio('song.mp3');

playButton.addEventListener('click', () => {
  audio.play();
});

stopButton.addEventListener('click', () => {
  audio.pause();
  audio.currentTime = 0;
});
