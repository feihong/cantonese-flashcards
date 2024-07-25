const speakEl = document.getElementById('b5188624-0739-4c54-a9b6-f212383d8370-speak')
const front = document.querySelector('.b5188624-0739-4c54-a9b6-f212383d8370-front').innerText
// const front = "广东话"

speakEl.onclick = () => {
  say('zh-hk', front)
}
