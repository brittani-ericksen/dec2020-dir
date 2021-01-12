// Create a simple stopwatch app that starts the timer and shows the stopped time.

// Start the stopwatch with a promise
// End the stopwatch on a random time between 1-10 seconds
// When the stopwatch stops, display the time it took

function getRandom(max) {
    return Math.floor(Math.random() * Math.floor(max))
}


function stopwatch() {
    return new Promise(function(resolve, reject) {
        const maxTime = getRandom(10);
        console.timeLog("Max time is: ", maxTime);
        let time = 0;
        let interval = setInterval(() => {
            time ++;
            console.log(time);
            if (time < maxTime) {
                resolve(time);
                clearInterval(interval);
            }
        }, 1000);
    });
}

stopwatch().then(function (time) {
    console.log("Time is up! " + time + " seconds have passed!");
})