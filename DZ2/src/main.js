import { diffDates, diffToHtml } from "./datecalc.js";
import { formatError } from "./utils.js";
import { timerStart, timerStop } from "./timer.js"
import { chechingTimerOrCalc } from "./checking.js"
import "../style.css"


const dateCalcForm = document.getElementById("datecalc");
const dateCalcResult = document.getElementById("datecalc__result");
const calcLink = document.querySelector('.calcLink')
const timerLink = document.querySelector('.timerLink')
const start = document.querySelector('#startTimer')
const stop = document.querySelector('#stopTimer')

dateCalcForm.addEventListener("submit", handleCalcDates);
calcLink.addEventListener('click', chechingTimerOrCalc)
timerLink.addEventListener('click', chechingTimerOrCalc)
start.addEventListener('click', timerStart)
stop.addEventListener('click', timerStop)

function handleCalcDates(event) {
    dateCalcResult.innerHTML = "";
    event.preventDefault();

    let { firstDate, secondDate } = event.target.elements;
    firstDate = firstDate.value,
        secondDate = secondDate.value;

    if (firstDate && secondDate) {
        const diff = diffDates(firstDate, secondDate);
        dateCalcResult.innerHTML = diffToHtml(diff);
    }
    else dateCalcResult.innerHTML = formatError("Для расчета промежутка необходимо заполнить оба поля"); // 5
}



