import { controls } from "./elements.js";
import * as actions from "./actions.js";
import * as elements from "./elements.js";
import { updateDisplay } from "./timer.js";
import state from "./state.js";

export function registerControls() {
    controls.addEventListener('click', function (event) {
        const action = event.target.dataset.action;

        if (typeof actions[action] != "function") {
            return
        }

        actions[action]()
    });
}

export function setMinutes() {
    elements.minutes.setAttribute('contenteditable', true)
    elements.minutes.focus('focus', () => {
      elements.hours.textContent = "";
      elements.minutes.textContent = "";
      elements.seconds.textContent = "";
    });
  
    elements.minutes.onkeypress = (event) => {
      /\d/.test(event.key)
    }
  
    elements.minutes.addEventListener('blur', (event) => {
      let time = event.currentTarget.textContent;
      time = time > 60 ? 60: time
  
      state.hours = 0;
      state.minutes = 25;
      state.seconds = 0;
  
      updateDisplay()
  
      elements.minutes.removeAttribute('contenteditable')
    })
  }