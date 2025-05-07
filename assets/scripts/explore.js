// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const synth = window.speechSynthesis;
  const textArea = document.getElementById('text-to-speak');
  const voiceMenu = document.getElementById('voice-select');
  const talkBtn = document.querySelector('button');
  const faceImg = document.querySelector('img');

  let voices = [];

  // load voice options
  function loadVoices() {
    voices = synth.getVoices();
    voiceMenu.innerHTML = '<option value="select" disabled selected>Select Voice:</option>';

    voices.forEach(voice => {
      const option = document.createElement('option');
      option.textContent = `${voice.name} (${voice.lang})`;
      option.value = voice.name;
      voiceMenu.appendChild(option);
    });
  }

  loadVoices();
  synth.addEventListener('voiceschanged', loadVoices);

  // Handle button click to speak
  talkBtn.addEventListener('click', () => {
    const utterance = new SpeechSynthesisUtterance(textArea.value);
    const selectedVoiceName = voiceMenu.value;

    utterance.voice = voices.find(voice => voice.name === selectedVoiceName);

    // Change face while speaking
    faceImg.src = 'assets/images/smiling-open.png';

    // Reset face after speaking ends
    utterance.addEventListener('end', () => {
      faceImg.src = 'assets/images/smiling.png';
    });

    synth.speak(utterance);
  });
}



