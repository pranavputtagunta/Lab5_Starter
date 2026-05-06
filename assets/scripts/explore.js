// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const synth = window.speechSynthesis;
  const voiceSelect = document.getElementById('voice-select');
  const textArea = document.getElementById('text-to-speak');
  const playButton = document.querySelector('button');
  const faceImage = document.querySelector('img');

  let voices = [];

  // Function to load and populate voices into the dropdown
  function populateVoiceList() {
    voices = synth.getVoices();
    
    // Clear out the basic default options (except for our initial prompt)
    voiceSelect.innerHTML = '<option value="select" disabled selected>Select Voice:</option>';
    
    for (const voice of voices) {
      const option = document.createElement('option');
      option.textContent = `${voice.name} (${voice.lang})`;
      
      if (voice.default) {
        option.textContent += ' — DEFAULT';
      }
      
      option.setAttribute('data-lang', voice.lang);
      option.setAttribute('data-name', voice.name);
      voiceSelect.appendChild(option);
    }
  }

  // Load voices initially
  populateVoiceList();
  
  // Chrome loads voices asynchronously, so this event listener is required
  if (speechSynthesis.onvoiceschanged !== undefined) {
    speechSynthesis.onvoiceschanged = populateVoiceList;
  }

  // Handle Play Sound
  playButton.addEventListener('click', (event) => {
    // Prevent the form from natively submitting and refreshing the page
    event.preventDefault(); 
    
    const text = textArea.value;
    const utterThis = new SpeechSynthesisUtterance(text);
    const selectedOption = voiceSelect.selectedOptions[0].getAttribute('data-name');
    
    // Find the voice that matches the dropdown selection
    for (const voice of voices) {
      if (voice.name === selectedOption) {
        utterThis.voice = voice;
        break;
      }
    }

    // When speaking starts, open mouth
    utterThis.onstart = () => {
      faceImage.src = 'assets/images/smiling-open.png';
    };

    // When speaking ends, close mouth
    utterThis.onend = () => {
      faceImage.src = 'assets/images/smiling.png';
    };

    synth.speak(utterThis);
  });
}