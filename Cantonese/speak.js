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

const say = async (lang, text) => {
  const utterance = new SpeechSynthesisUtterance(text)
  const voice = await getVoiceForLang(lang)
  utterance.voice = voice
  speechSynthesis.speak(utterance)
}
