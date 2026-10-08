// =============================================================================
// MDT312 Assignment 7  - Square Game
// Modern JavaScript: DOM, Event, Timer
// =============================================================================

window.onload = pageLoad;

// Global timer reference
let timer = null;

function pageLoad(){
    // 1. ผูกปุ่ม Start
    const startBtn = document.getElementById("start");
    startBtn.onclick = startGame;

    // 2. Event Delegation
    const gameLayer = document.getElementById("layer");
    gameLayer.onclick = function(event) {
        if (event.target.classList.contains("square")) {
            event.target.remove();
        }
    };
}

function startGame(){
    clearScreen();
    countdown();
}

function countdown(){

    const countdownBox = document.getElementById("countdown");
	countdownBox.style.background = "#000000";

    let count = 3;

    countdownBox.style.display = "flex";
    countdownBox.textContent = count;

    const countdownTimer = setInterval(function(){

        count--;

        if (count > 0) {
            countdownBox.textContent = count;
        }
        else {
    		countdownBox.textContent = "GO!";

    		clearInterval(countdownTimer);

    		setTimeout(function(){
        		countdownBox.style.display = "none";
        		addBox();
        		timeStart();
    		}, 500);
		}

    }, 1000);
}

function showGameMessage(message){
    const messageBox = document.getElementById("countdown");
    messageBox.textContent = message;
    messageBox.style.display = "flex";

    if (message === "YOU WIN!") {
        messageBox.style.background = "#16a34a";
    } 
	else {
        messageBox.style.background = "#dc2626";
    }

    setTimeout(function(){
        messageBox.style.display = "none";
    }, 2000);
}

function timeStart(){
    const TIMER_TICK = 1000;

    if (timer !== null) {
        clearInterval(timer);
        timer = null;
    }

    const min = 0.5;
    let second = min * 60;

    const clockDisplay = document.getElementById('clock');
    clockDisplay.textContent = second;

    timer = setInterval(timeCount, TIMER_TICK);

    function timeCount(){
        const allbox = document.querySelectorAll("#layer .square");

        // ชนะ
        if (allbox.length === 0 && second > 0) {
            clearInterval(timer);
            timer = null;
            showGameMessage("YOU WIN!");
            return;
        }

        // แพ้
        if (second <= 0) {
            clearInterval(timer);
            timer = null;
            clearScreen();
            showGameMessage("GAME OVER!");
            return;
        }

        second--;
        clockDisplay.textContent = second;
    }
}

function addBox(){

    const numbox = parseInt(
        document.getElementById("numbox").value
    ) || 0;

    const gameLayer = document.getElementById("layer");
    const colorDrop = document.getElementById("color").value;

    for (let i = 0; i < numbox; i++){
        const tempbox = document.createElement("div");
        tempbox.className = "square " + colorDrop;
        tempbox.id = "box" + i;
        tempbox.style.left =
            Math.random() * (500 - 25) + "px";

        tempbox.style.top =
            Math.random() * (500 - 25) + "px";

        // add element to HTML node
        gameLayer.appendChild(tempbox);
    }
}

function clearScreen(){

    const allbox = document.querySelectorAll("#layer div");

    for (let i = 0; i < allbox.length; i++) {
        allbox[i].remove();
    }
}