const getVoices = () => {
  return new Promise((resolve) => {
    const voices = speechSynthesis.getVoices()
    if (voices.length > 0) {
      resolve(voices)
    } else {
      speechSynthesis.addEventListener('voiceschanged', () => resolve(speechSynthesis.getVoices()))
    }
  })
}

// Return the first voice found for the given lang
const getVoiceForLang = async (lang) => {
  return (await getVoices()).find(v => v.lang.toLowerCase() === lang)
}

const speakEl = document.getElementById('b5188624-0739-4c54-a9b6-f212383d8370-speak')

speakEl.onclick = async () => {
  const utterance = new SpeechSynthesisUtterance(speakEl.dataset.word)
  const voice = await getVoiceForLang(speakEl.dataset.lang)
  utterance.voice = voice
  speechSynthesis.speak(utterance)
}
