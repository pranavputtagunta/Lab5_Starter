// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // Get the necessary HTML elements
  const hornSelect = document.getElementById('horn-select');
  const image = document.querySelector('#expose > img');
  const audio = document.querySelector('audio');
  const volumeControl = document.getElementById('volume');
  const volumeIcon = document.querySelector('#volume-controls > img');
  const playButton = document.querySelector('button');

  // intilaize jsconfetti
  const jsConfetti = new JSConfetti();

  // Changing horn selection
  hornSelect.addEventListener('change', (event) => {
    const hornType = event.target.value; 

    if (hornType === 'air-horn') {
      image.src = 'assets/images/air-horn.svg';
      audio.src = 'assets/audio/air-horn.mp3';
    } else if (hornType === 'car-horn') {
      image.src = 'assets/images/car-horn.svg';
      audio.src = 'assets/audio/car-horn.mp3';
    } else if (hornType === 'party-horn') {
      image.src = 'assets/images/party-horn.svg';
      audio.src = 'assets/audio/party-horn.mp3';
    }
  });

  // Changing volume 
  volumeControl.addEventListener('input', (event) => {
    const volume = event.target.value;
    audio.volume = volume / 100;

    if (volume == 0) {
      volumeIcon.src = 'assets/icons/volume-level-0.svg';
    } else if (volume < 33) {
      volumeIcon.src = 'assets/icons/volume-level-1.svg';
    } else if (volume < 67) {
      volumeIcon.src = 'assets/icons/volume-level-2.svg';
    } else {
      volumeIcon.src = 'assets/icons/volume-level-3.svg';
    }

  });

  // Play sound
  playButton.addEventListener('click', () => {
    if (hornSelect.value !== 'select') {
      audio.play();
      if (hornSelect.value === 'party-horn') {
        jsConfetti.addConfetti();
      }
    }
  });
}