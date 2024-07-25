const answer = localStorage.getItem('answer')
const answerEl = document.getElementById('b5188624-0739-4c54-a9b6-f212383d8370-answer')
if (answer !== null && answerEl !== null) {
  answerEl.textContent = answer
} else {
  answerEl.textContent = 'n/a'
}
