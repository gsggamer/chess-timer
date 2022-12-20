blackTimer = document.getElementById("timer1")
whiteTimer = document.getElementById("timer2")
blackTimerOpMinute = document.getElementById("op1-m")
blackTimerOpSecond = document.getElementById("op1-s")
whiteTimerOpMinute = document.getElementById("op2-m")
whiteTimerOpSecond = document.getElementById("op2-s")

defaultTimerValueMinute = 45
defaultTimerValueSecond = 00

blackMinute = 45
blackSecond = 00
whiteMinute = 45
whiteSecond = 00

time = "black"

function timer_change() {
    console.log("Changing timer target...")
    if(time == "black") {
        time = "white"
    } else if(time == "white") {
        time = "black"
    }
}

function reset() {
    console.log("Reseting all timers...")
    blackTimerOpMinute.innerHTML = defaultTimerValueMinute
    blackTimerOpSecond.innerHTML = defaultTimerValueSecond + "0"
    whiteTimerOpMinute.innerHTML = defaultTimerValueMinute
    whiteTimerOpSecond.innerHTML = defaultTimerValueSecond + "0"
}

function normal() {
    if(time == "black") {
        blackSecond -= 1
        if(blackSecond < 0) {
            blackMinute -= 1
            blackSecond = 59
        }
        blackTimerOpMinute.innerHTML = blackMinute
        blackTimerOpSecond.innerHTML = blackSecond
    }
    else if(time == "white") {
        whiteSecond -= 1
        if(whiteSecond <= 0) {
            whiteMinute -= 1
            whiteSecond = 59
        }
        whiteTimerOpMinute.innerHTML = whiteMinute
        whiteTimerOpSecond.innerHTML = whiteSecond
    }

    console.log(blackMinute + ":" + blackSecond)
}
setInterval(normal, 1000)