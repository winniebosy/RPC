//activities before rpc page loads
//we create a function until the body is ready
function onLoad(callback) {
    let intervalId = window.setInterval(function() {
        if (document.getElementsByTagName('body')[0] !== undefined) {
            window.clearInterval(intervalId);
            callback.call(this)
        }
    }, 7000)
}

let countDown = 3;
//sets visibility after onload.
function setVisible(selector, visible) {
    document.querySelector('#page-loading').style.display = visible ? 'block' : 'none';
}

//homepage is set visible
onLoad(function() {
    setVisible('#loading', false);
});


//countdown for the timer
function countdownTimer() {
    let timeLeft = 5;
    let count = document.getElementById("seconds");

    let playTimer = setInterval(function() {
        if (timeLeft <= 0) {
            clearInterval(playTimer);
            count.textContent = "GO!"
        } else {
            count.textContent = timeLeft;
        }

        timeLeft--
    }, 1000)

}


countdownTimer();