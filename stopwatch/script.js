let timerDisplay = document.querySelector('.timerDisplay');
let stopBtn = document.getElementById('stopBtn');
let startBtn = document.getElementById('startBtn');
let resetBtn = document.getElementById('resetBtn');

let msec = 0;
let secs = 0;
let mins = 0;

let timerId = null;

// Start button event listener
startBtn.addEventListener('click', function() {
    if (timerId !== null) {
        clearInterval(timerId);
    }
    timerId = setInterval(startTimer, 10); // Timer updates every 10ms
});

// Stop button event listener
stopBtn.addEventListener('click', function() {
    clearInterval(timerId);
});

// Reset button event listener
resetBtn.addEventListener('click', function() {
    clearInterval(timerId);
    msec = 0;
    secs = 0;
    mins = 0;
    timerDisplay.innerHTML = `00 : 00 : 00`;
});

// Timer function
function startTimer() {
    msec++;
    if (msec === 100) { // 100 milliseconds make 1 second
        msec = 0;
        secs++;
        if (secs === 60) { // 60 seconds make 1 minute
            secs = 0;
            mins++;
        }
    }

    // Format time strings to always be two digits
    let msecString = msec < 10 ? `0${msec}` : msec;
    let secsString = secs < 10 ? `0${secs}` : secs;
    let minsString = mins < 10 ? `0${mins}` : mins;

    // Update the display
    timerDisplay.innerHTML = `${minsString} : ${secsString} : ${msecString}`;
}
