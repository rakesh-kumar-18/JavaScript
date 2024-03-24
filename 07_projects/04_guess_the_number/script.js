const form = document.querySelector(".form")
const guessField = document.querySelector("#guessField")
const guesses = document.querySelector(".guesses")
const lastResult = document.querySelector(".lastResult")
const lowOrHi = document.querySelector(".lowOrHi")

let guessRemain = 10
let num = Math.floor(Math.random() * 100) + 1

form.addEventListener("submit", function (e) {
    e.preventDefault()
    const guessValue = parseInt(guessField.value)

    if (guessValue === "" || guessValue < 1 || guessValue > 100 || isNaN(guessValue)) {
        lowOrHi.innerText = "Please enter a valid number"
    } else {
        guessRemain--
        guesses.innerText += `${guessValue},`
        lastResult.innerText = guessRemain
        if (guessValue < num) {
            lowOrHi.innerText = "Low"
        } else if (guessValue > num) {
            lowOrHi.innerText = "High"
        } else {
            lowOrHi.innerText = `You get it right. Random number is ${num}`
            num = Math.floor(Math.random() * 100) + 1
            guessRemain = 10
            guesses.innerText = ''
        }
    }
    form.reset()
    if (guessRemain === 0) {
        lowOrHi.innerText = `You've exhausted all attempts. The random number was ${num}`
        num = Math.floor(Math.random() * 100) + 1
        guessRemain = 10
        guesses.innerText = ''
    }
})