
// Below code will set the thread pool to 2 from default 4.
process.env.UV_THREADPOOL_SIZE = 2;

const crypto = require('crypto');

const start = Date.now();

// below function is a hashing algoritham. It will take some time to run

crypto.pbkdf2('a','b',100000,512,'sha512', ()=>{
    //cb runs after pbkdf2 completes hash

    console.log('1:' , Date.now()-start); // how long in ms it took to run hash value

});


crypto.pbkdf2('a','b',100000,512,'sha512', ()=>{
    //cb runs after pbkdf2 completes hash

    console.log('2:' , Date.now()-start); // how long in ms it took to run hash value

});

// Result
// 1: 995
// 2: 1005

// We will see that both functions take same time from start time.
// this kind of proves that node is not running in single thread.
// both pbkdf2 ran in parallal instead of running in seq as in a single thread

// pbkdf2, node's C++ side pass execution to libuv library which has a thread pool
// In addition to main thread used by node, 4 threads in a thread pool is also used 
// for computationally intensive tasks,




// REPEAT THE FUNCTION CALL THREE MORE TIMES => TOTAL 5 CALLS.

crypto.pbkdf2('a','b',100000,512,'sha512', ()=>{
    //cb runs after pbkdf2 completes hash

    console.log('3:' , Date.now()-start); // how long in ms it took to run hash value

});

crypto.pbkdf2('a','b',100000,512,'sha512', ()=>{
    //cb runs after pbkdf2 completes hash

    console.log('4:' , Date.now()-start); // how long in ms it took to run hash value

});

crypto.pbkdf2('a','b',100000,512,'sha512', ()=>{
    //cb runs after pbkdf2 completes hash

    console.log('5:' , Date.now()-start); // how long in ms it took to run hash value

});


//RESULTS

// 3: 1418
// 4: 1475
// 2: 1476
// 1: 1517
// 5: 2441  => We will see that 5th one take additional 1 second
// THis is because there are 4 thread from pool. This pc have dual core
// processor with two threads in parallal for each core. So first 4 functions
// went in parallal - 2 each for a core. Then 5th one waited to get a thread.




