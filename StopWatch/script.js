/* Variables */
var running = false;
var milliseconds = 0;
var seconds = 0;
var minutes = 0;

const play = document.querySelector('.play');
const reset = document.querySelector('.reset');
const lap = document.querySelector('.lap');
const clear = document.querySelector('.clear');
const time = document.querySelector('.time');
const lapsSet = document.querySelector('.laps');

/* Event Listners */

lap.addEventListener('click',lapRecord);
clear.addEventListener('click',clearLapRecord);

reset.addEventListener('click', resetWatch);

play.addEventListener('click', () => {
    startStop();
});

window.addEventListener('keypress', el => {
    if (el.keyCode == '32') {
        startStop();
    }
    else if (el.keyCode == '108') {
        lapRecord();
    }
    else if(el.keyCode == '114'){
        resetWatch();
    }
    else if(el.keyCode == '99'){
        clearLapRecord();
    }
});

/**
 * Functions
 */
function resetWatch(){
    time.innerHTML = '00:00:00';
    milliseconds = 0;
    seconds = 0;
    minutes = 0;
}

function formatValue(val){
    if(val<10){
        return '0'+val;
    }else{
        return val;
    }
}

function lapRecord(){
    var lapValue = document.createElement('div');
    lapsSet.appendChild(lapValue).innerHTML = formatValue(minutes) + ":" + formatValue(seconds) + ":" + formatValue(milliseconds);
}

function clearLapRecord(){
    while (lapsSet.lastChild)  /* Remove all the child Node */
    lapsSet.removeChild(lapsSet.lastChild); 
}

function changeButtonName() {
    if (play.innerHTML == 'Start') {
        play.innerHTML = 'Stop'
    } else {
        play.innerHTML = 'Start'
    }
}

function stopWatch() {

    milliseconds++;

    // Logic to determine when to increment next value

    if (milliseconds / 100 === 1) {
        milliseconds = 0;
        seconds++;
        if (seconds / 60 === 1) {
            seconds = 0;
            minutes++;
        }
    }

    // Display updated time values to user
    time.innerHTML = formatValue(minutes) + ":" + formatValue(seconds) + ":" + formatValue(milliseconds);
}

function startStop() {
    if (running) {
        window.clearInterval(interval);
        changeButtonName();
        running = false;
    } else {
        interval = window.setInterval(stopWatch, 10);
        changeButtonName();
        running = true;
    }
}