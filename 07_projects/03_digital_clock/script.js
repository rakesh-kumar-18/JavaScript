const clock = document.querySelector("#clock")

const updateTime = function () {
    const time = new Date()
    clock.innerText = time.toLocaleTimeString()
}

setInterval(updateTime, 1000)