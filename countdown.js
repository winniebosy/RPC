//activities before rpc page loads
//we create a function until the body is ready
function onLoad(callback) {
    let intervalId = window.setInterval(function() {
        if (document.getElementsByTagName('body')[0] !== undefined) {
            window.clearInterval(intervalId);
            callback.call(this)
        }
    }, 2000)
}

let countDown = 3;
//sets visibility after onload.
function setVisible(selector, visible) {
    document.querySelector('#page-loading').style.display = visible ? 'block' : 'none';
}

//countdown for the timer
function countdownTimer() {

    let timeId = document.querySelector('#seconds');
    let time = timeId.textContent;
    countDown--;
    if (countDown > 0) {
        setTimeout(countdownTimer, 1000)

    }
};

setTimeout(countdownTimer, 1000)




onLoad(function() {

    setVisible('#loading', false);
});