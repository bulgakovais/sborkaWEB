const calcCheck = document.querySelector('#calcCheck')
const timerCheck = document.querySelector('#timerCheck')
const calcLink = document.querySelector('.calcLink')
const timerLink = document.querySelector('.timerLink')

calcLink.addEventListener('click', chechingTimerOrCalc)
timerLink.addEventListener('click', chechingTimerOrCalc)

function chechingTimerOrCalc(event) {
    if (event.target.classList.contains('calcLink')) {
        calcCheck.classList.remove('hide')
        timerCheck.classList.add('hide')
    }
    else if (event.target.classList.contains('timerLink')) {
        timerCheck.classList.remove('hide')
        calcCheck.classList.add('hide')
    }
    event.preventDefault()
}