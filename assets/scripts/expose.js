// expose.js

// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const hornSelect = document.getElementById('horn-select');
  const hornImage = document.querySelector('img');
  const hornAudio = document.querySelector('audio');
  const volumeSlider = document.getElementById('volume');
  const volumeIcon = document.querySelector('#volume-controls img');
  const playButton = document.querySelector('button');

  // Instantiate jsConfetti from the global class (NO import needed)
  const jsConfetti = new JSConfetti();

  // Horn select event listener
  hornSelect.addEventListener('change', () => {
    const horn = hornSelect.value;

    if (horn === 'air-horn' || horn === 'car-horn' || horn === 'party-horn') {
      hornImage.src = `assets/images/${horn}.svg`;
      hornImage.alt = `${horn.replace('-', ' ')} image`;
      hornAudio.src = `assets/audio/${horn}.mp3`;
    }
  });

  // Volume slider input event
  volumeSlider.addEventListener('input', () => {
    const volume = Number(volumeSlider.value);
    hornAudio.volume = volume / 100;

    if (volume === 0) {
      volumeIcon.src = 'assets/icons/volume-level-0.svg';
      volumeIcon.alt = 'Volume level 0';
    } else if (volume < 33) {
      volumeIcon.src = 'assets/icons/volume-level-1.svg';
      volumeIcon.alt = 'Volume level 1';
    } else if (volume < 67) {
      volumeIcon.src = 'assets/icons/volume-level-2.svg';
      volumeIcon.alt = 'Volume level 2';
    } else {
      volumeIcon.src = 'assets/icons/volume-level-3.svg';
      volumeIcon.alt = 'Volume level 3';
    }
  });

  // Play button event
  playButton.addEventListener('click', () => {
    if (hornAudio.src) {
      hornAudio.play();
      if (hornSelect.value === 'party-horn') {
        jsConfetti.addConfetti();
      }
    }
  });
}
