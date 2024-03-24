const body = document.querySelector('body')
const startBtn = document.querySelector('#start')
const stopBtn = document.querySelector('#stop')
let intervalId

const randomNum = function () {
    const num = Math.floor(Math.random() * 256)
    return num
}

function changeBgColor() {
    const bgColor = `rgb(${randomNum()}, ${randomNum()}, ${randomNum()})`
    body.style.backgroundColor = bgColor
}

startBtn.addEventListener('click', function () {
    if (!intervalId) {
        intervalId = setInterval(changeBgColor, 1000)
    }
})

stopBtn.addEventListener('click', function () {
    clearInterval(intervalId)
    intervalId = null
})