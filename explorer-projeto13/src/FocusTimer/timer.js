import state from "./state.js";
import * as elements from './elements.js';
import { reset } from "./actions.js";
import { kichenTimer } from "./sounds.js";

export function countdown() {

    clearTimeout(state.countdownId);
    
    if (!state.isRunning) {
        return
    }

    let hours = Number(elements.hours.textContent)
    let minutes = Number(elements.minutes.textContent)
    let seconds = Number(elements.seconds.textContent)

    seconds--

    if (seconds < 0) {
        seconds = 59;
        minutes--
    }

    if (minutes < 0) {
        reset()
        return
    }

    setTimeout(() => { countdown() }, 1000)

    state.countdownId = setTimeout(() => countdown(), 1000);
}

export function updateDisplay(hours, minutes, seconds) {
    hours = hours ?? state.hours;
    minutes = minutes ?? state.minutes;
    seconds = seconds ?? state.seconds;

    elements.hours.textContent = String(hours).padStart(2, "0");
    elements.minutes.textContent = String(minutes).padStart(2, "0");
    elements.seconds.textContent = String(seconds).padStart(2, "0");
}