/****************************** HTML VARIABLES ******************************/
const hoursHtml = document.getElementById("hours");
const minutesHtml = document.getElementById("minutes");
const secondsHtml = document.getElementById("seconds");
const startButton = document.getElementById("startButton");
const resetButton = document.getElementById("resetButton");
const stopwatchmode = document.getElementById("stopwatchmode");
const timermode = document.getElementById("timermode");
const progressbar = document.getElementById("progressbar");

const play = document.createElement("img");
play.src = "./assets/img/play.svg";

const pause = document.createElement("img");
pause.src = "./assets/img/pause.svg";

const click = document.createElement("audio");
click.src = "./assets/sounds/click.mp3";

minutesHtml.value = "00";
hoursHtml.value = "00";
secondsHtml.value = "00";

listTimes = [hoursHtml,minutesHtml,secondsHtml];
listButtons = [startButton,  resetButton, stopwatchmode, timermode];

/****************************** VARIABLES ******************************/
let seconds = 0;
let minutes = 0;
let hours = 0;
let intervalId;
let pausedTime = 0;
let isPaused = false;
let startButtonClicked = true; 
let totalSeconds = 0;
let totaltimerwidth = 100;

/****************************** FUNCTIONS ******************************/

function assignModeType( mode ){
    /*
    Select the mode type for the program, 1 for stop watch, 2 for the timer.
    Params: 
        • mode int between 1 or 2.
    Requires:
        • Existance of global variables listTimes, resetButton, startButton, startButtonClicked.
        • Existance of functions useStopWatch() and playButtonStopWatchMode()
    */
    startButton.innerHTML = "";
    if ( mode === 1 ){
        listTimes.forEach(element => {
            element.disabled = true;
        });
        resetButton.onclick = () => useStopWatch(3);
        startButton.appendChild(play);
        startButtonClicked = false;
        startButton.onclick = playButtonStopWatchMode; 
        stopwatchmode.classList.add("maincontainer_selectionmode--optionactive")
        timermode.classList.remove("maincontainer_selectionmode--optionactive")
    } else if ( mode === 2 ){
        listTimes.forEach(element => {
            element.disabled = false;
        });
        resetButton.onclick = () => useStopWatch(3);
        startButton.appendChild(play);
        startButtonClicked = false;
        startButton.onclick = playButtonTimerhMode;
        stopwatchmode.classList.remove("maincontainer_selectionmode--optionactive")
        timermode.classList.add("maincontainer_selectionmode--optionactive")
    }
}

/****************************** STOP WATCH FUNCTIONS ******************************/

function playButtonStopWatchMode() {
    /*
    Function to manage the behavior of the button of start, it switches between pause and 
    play to manage the stopwacht depending on the click.
    Requires:
        • Existance of global variables startButtonClicked, startButton.
        • Existance of function useStopWatch().
    */
    startButtonClicked = !startButtonClicked; 

    if (startButtonClicked) {
        startButton.innerHTML = "";
        startButton.appendChild(pause);
        useStopWatch(1); 
    } else {
        startButton.innerHTML = "";
        startButton.appendChild(play);
        useStopWatch(2);
    }
}

function stopWatch() {
    /*
    Function to use the stopwatch. It updates and excecutes the stopwatch.
    Requires: 
       • That global variable of seconds, minutes, hour, isPaused exist.
       • Existance of function updateDisplay(). 
    */
    return setInterval(() => {
        if (!isPaused) {
            seconds++;
            if (seconds === 60) {
                seconds = 0;
                minutes++;
                if (minutes === 60) {
                    minutes = 0;
                    hours++;
                }
            }
            updateDisplay();
            updateprogressbar( 1 )
        }
    }, 1000);
}


function pauseStopWatch() {
    /*
    Function to pause the stop watch and it turn isPaused into false.
    Requires:
        • Existance of global variable isPaused and intervalId.
        • Existance of function clearInterval()
    */
    clearInterval(intervalId);
    isPaused = true;
}

function resetStopWatch(){
    /*
    Function to reset the stop watch into zero.
    Requires:
        • Existance of global variables seconds, minutes, hours, intervalId, isPaused.
        • Existance of functions clearInterval() and updateDisplay()
    */
    seconds = 0;
    minutes = 0;
    hours = 0;
    clearInterval(intervalId);
    intervalId = null;
    updateDisplay();
    updateprogressbar( 1 )
    isPaused = true;
    startButton.innerHTML = "";
    startButton.appendChild(play);
    totaltimerwidth = 100;
}

function useStopWatch(selection) {
    /*
    Function to execute the function depending of the selection to handle the stopwatch.
    Params:
        • selection: int between 1 and 3.
    Requires:
        • Existence of functions clearInterval(), pauseStopWatch() and resetStopWatch()
        • Existence of global variables isPaused and intervalId
    */
    switch (selection) {
        case 1:
            isPaused = false;
            clearInterval(intervalId);
            intervalId = stopWatch();
            break;
        case 2:
            pauseStopWatch();
            break;
        case 3:
            resetStopWatch();
            break;
    }
}


/****************************** TIMER FUNCTIONS ******************************/

function timer() {
    /*
    Function to use the timer. It updates and excecutes the timer.
    Requires: 
       • That global variable of seconds, minutes, hour, isPaused exist.
       • Existance of function updateDisplay(). 
    */
    seconds = parseInt(secondsHtml.value);
    minutes = parseInt(minutesHtml.value);
    hours = parseInt(hoursHtml.value);
    
    if (isNaN(seconds) || seconds === "" || seconds === null || seconds === undefined) {
        seconds = 0;
    }

    if (isNaN(minutes) || minutes === "" || minutes === null || minutes === undefined) {
        minutes = 0;
    }

    if (isNaN(hours) || hours === "" || hours === null || hours === undefined) {
        hours = 0;
    }
    calculateSecondsTimer()
    updateDisplay()
    updateprogressbar( 2 )
    

    if ( hours != 0 || seconds != 0 || minutes != 0 ){
        return intervalId = setInterval(() => {
            if (!isPaused) {
                seconds--;
    
                if (seconds < 0) {
                    seconds = 59;
                    minutes--;
                    if (minutes < 0) {
                        minutes = 59;
                        hours--;
                    }
                }
                
                updateDisplay()
                updateprogressbar( 2 )
        
                if (hours === 0 && minutes === 0 && seconds === 0) {
                    clearInterval(intervalId);
                    totaltimerwidth = 100;
                    startButton.innerHTML = "";
                    startButton.appendChild(play);
                }
            }
            
        }, 1000);
    }
  
}

function useTimer(selection) {
    /*
    Function to execute the function depending of the selection to handle the timer.
    Params:
        • selection: int between 1 and 3.
    Requires:
        • Existence of functions clearInterval(), pauseStopWatch() and resetStopWatch()
        • Existence of global variables isPaused and intervalId
    */
    switch (selection) {
        case 1:
            isPaused = false;
            clearInterval(intervalId);
            intervalId = timer();
            break;
        case 2:
            pauseStopWatch();
            break;
        case 3:
            resetStopWatch();
            break;
    }
}

function playButtonTimerhMode() {
    /*
    Function to manage the behavior of the button of start, it switches between pause and 
    play to manage the stopwacht depending on the click.
    Requires:
        • Existance of global variables startButtonClicked, startButton.
        • Existance of function useStopWatch().
    */
    startButtonClicked = !startButtonClicked; 

    if (startButtonClicked) {
        startButton.innerHTML = "";
        startButton.appendChild(pause);
        useTimer(1); 
    } else {
        startButton.innerHTML = "";
        startButton.appendChild(play);
        useTimer(2);
    }
}

/***************************** FUNCTION TO UPDATE DISPLAY *****************************/

function updateDisplay() {
    /*
    Function to update the placeholder of the input parts of the program.
    It always assure that it is in the two digit format as mininum.
    Requires:
        • Existance of global variables secondsHtml minutesHtml hoursHtml.
    */
    secondsHtml.value = seconds < 10 ? '0' + seconds : seconds;
    minutesHtml.value = minutes < 10 ? '0' + minutes : minutes;
    hoursHtml.value = hours < 10 ? '0' + hours : hours;
    
}

function calculateSecondsTimer(){
    /*
    Function to save and update the variable totalSeconds with the total seconds on minutes, hours.
    */
    totalSeconds = hours * 3600 + minutes * 60 + seconds;
}

function updateprogressbar( typeUpdate ){
    /*
    Function to update the progress bar.
    Params:
        • typeUpdate: int 1 or 2, 1 to update progress bar with stop watch and 2 for timer.
    Result:
        • If selected 1 with of progress bar will go from 0 to 100% on the contrary if selected number 2 it will go from 100% to 0%.
    */
    switch ( typeUpdate ){
        case 1:
            unit = 100 / 60;
            progressbar.style.width = `${seconds*unit}%`;
            break
        case 2:
            unit = (1/totalSeconds)*100;
            progressbar.style.width = `${totaltimerwidth}%`;
            totaltimerwidth = totaltimerwidth - unit;
            break
    }
}


function playClick(){
    click.play();
}

listButtons.forEach(button => {
    button.addEventListener("click", playClick);
});

assignModeType( 1 )
