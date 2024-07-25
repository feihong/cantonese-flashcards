const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition
const recognition = new SpeechRecognition()
recognition.lang = 'zh-hk'

const listenEl = document.getElementById('b5188624-0739-4c54-a9b6-f212383d8370-listen')
const transcriptEl = document.getElementById('b5188624-0739-4c54-a9b6-f212383d8370-transcript')

listenEl.onclick = () => {
  listenEl.innerText = 'Listening...'
  recognition.start()
}

recognition.onspeechend = () => {
  recognition.stop()
}

recognition.onsoundend = () => {
  recognition.stop()
}

recognition.onresult = event => {
  const result = event.results[0][0]
  const transcript = result.transcript
  transcriptEl.textContent = 'You said: ' + transcript
  localStorage.setItem('answer', transcript)
  listenEl.innerText = 'Listen'
}
