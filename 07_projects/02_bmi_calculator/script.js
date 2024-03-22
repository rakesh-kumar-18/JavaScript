const form = document.querySelector("form")
const height = document.querySelector("#height")
const weight = document.querySelector("#weight")
const result = document.querySelector("#results")

form.addEventListener("submit", function (e) {
    e.preventDefault()
    const heightValue = parseInt(height.value)
    const weightValue = parseInt(weight.value)

    if (heightValue === "" || heightValue < 0 || isNaN(heightValue)) {
        result.innerText = "Please give a valid height"
    } else if (weightValue === "" || weightValue < 0 || isNaN(weightValue)) {
        result.innerText = "Please give a valid weight"
    } else {
        const res = (weightValue / Math.pow(heightValue, 2)).toFixed(2)
        resStr = ""
        if (res > 24.9) {
            resStr = "Overweight"
        } else if (res > 18.6) {
            resStr = "Normal Range"
        } else {
            resStr = "Under Weight"
        }
        result.innerHTML = `<span>${res}</span><br><span>${resStr}</span>`
        form.reset()
    }
})