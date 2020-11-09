// run "node myFile.js" in terminal.

const pendingTimers = [];
const pendingOSTasks = [];
const pendingOperations = [];



// New times, tasks, operations are  recorded from myFile running.
myFile.runContents();

function shouldContinue(){
    // return true or false

    // checkOne : Any pending setTimeOut, setInterval, setImmediate ?
    // chekcTwo: any pending OS tasks. For example http server listen to 8080
    // checkThree: Any long running operations going on => function call on fs module to read file

    return pendingTimers.length || pendingOSTasks.length || pendingOperations.length

}



// Entire body executes one 'tick'
// Below is psuedoCode for Event Loop
while(shouldContinue()) {
    // 1) Node looks at pending timers and see if any functions are pending to be called. setTimeOut, setInterval

    // 2) Node looks for pending tasks and operations and calls relavent call back

    // 3) Pause Execution and continue when 
    // - when a new pendingOSTask is done
    // - when a new pendingOperation is done
    // - a timer is about to complete

    // 4) Look for pending timers . Call any setImmediate

    // 5) Handle any close events.


}


// exit back to terminal
