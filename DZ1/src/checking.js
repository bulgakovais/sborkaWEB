const calcCheck = document.querySelector('#calcCheck')
const timerCheck = document.querySelector('#timerCheck')

export function chechingTimerOrCalc(event) {
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