import { HowlToExport } from './howler.js'
let sound = new HowlToExport({
    src: ['sound.mp3']
});

let timer = null;
export function timerStart(event) {
    if (!timer) {
        let hour = document.querySelector('#hours')
        let minute = document.querySelector('#minutes')
        let second = document.querySelector('#seconds')

        let h = hour.value
        let m = minute.value
        let s = second.value

        timer = setInterval(() => {
            if (s == 0) {
                if (m == 0) {
                    if (h == 0) {
                        timerStop(timer)
                        sound.play();
                        return;
                    }
                    h--;
                    m = 60;
                    if (h < 10) h = "0" + h;
                }
                m--;
                if (m < 10) m = "0" + m;
                s = 59;
            }
            else s--;
            if (s < 10) s = "0" + s;
            hour.value = `${h}`
            minute.value = `${m}`
            second.value = `${s}`
        }, 1000)
        event.preventDefault(timer)
    }
}

export function timerStop() {
    if (timer) {
        clearInterval(timer);
        timer = null;
    }
}