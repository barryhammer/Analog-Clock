setInterval(setClock, 1000) //Run every 1000 milliseconds = 1 second

const hourHand = document.querySelector('[data-hour-hand]')
const minuteHand = document.querySelector('[data-minute-hand]')
const secondHand = document.querySelector('[data-second-hand]')

function setClock() {
    const currentDate = new Date() //Gets current date and time
    const secondsRatio = currentDate.getSeconds() / 60
    // Move minute and hour hands gradually according to seconds and minutes
    const minutesRatio = (secondsRatio + currentDate.getMinutes()) / 60
    const hoursRatio = (minutesRatio + currentDate.getHours()) / 12
    setRotation(secondHand, secondsRatio)
    setRotation(minuteHand, minutesRatio)
    setRotation(hourHand, hoursRatio)
}

function setRotation (element, rotationRatio) {
    // Sets property of element to rotation variable in CSS 
    element.style.setProperty('--rotation', rotationRatio * 360)
}

setClock() //Sets clock to current time as soon as page is loaded.