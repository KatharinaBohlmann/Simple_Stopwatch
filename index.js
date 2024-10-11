const display = document.getElementById("timer");
let timer = null;
let startTime = 0;
let elapsedTime = 0;
let isRunning = false;

let minutes = 0;
let seconds = 0;
let milliseconds = 0;

let ol = document.getElementById("laps");
let listLength = 0;

function start() {
    if(!isRunning) {
        startTime = Date.now() - elapsedTime;
        timer = setInterval(update, 10);
        isRunning = true;
    }
}

function stop() {
    if(isRunning) {
        clearInterval(timer);
        isRunning = false;
    }
}

function reset() {
    clearInterval(timer);
    startTime = 0;
    elapsedTime = 0;
    isRunning = false;
    display.innerText = "00:00:00";

    for (let i = listLength; i >= 0; i--) {
        ol.removeChild(ol.firstChild);
    }

}

function lap() {
    let li = document.createElement("li");
    li.appendChild(document.createTextNode(display.innerText));
    ol.appendChild(li);

    listLength++;
}

function update() {
    const currentTime = Date.now();
    elapsedTime = currentTime - startTime;

    minutes = Math.floor(elapsedTime / (1000 * 60) % 60);
    seconds = Math.floor(elapsedTime / 1000 % 60);
    milliseconds = Math.floor(elapsedTime % 100);

    display.innerText = ("00" + minutes).slice(-2) + ":"
        + ("00" + seconds).slice(-2) + ":"
        + ("00" + milliseconds).slice(-2);
}