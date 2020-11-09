const https = require('https');
const crypto = require('crypto');
const fs = require('fs');

const start = Date.now();

// Async OS Operation

function doRequest(){

    https.request('https://www.google.com', (res)=>{
        res.on('data', ()=>{});
        res.on('end', ()=> {
            console.log('n/w request: ', Date.now() - start)
        });
    }).end();

}

// Work deligated to threads

function doHash(){
    crypto.pbkdf2('a','b',100000,512,'sha512', ()=>{
        console.log('Hash:' , Date.now()-start); // how long in ms it took to run hash value

    });
}

doRequest();

// File System read

fs.readFile('multitask.js', 'utf-8', ()=>{
    console.log('FS: ', Date.now() - start )
});

// doHash();
// doHash();
// doHash();
// doHash();


// Output

// n/w request:  346
// Hash: 1992
// FS:  1996
// Hash: 2006
// Hash: 2038
// Hash: 2041


// remove hash call and run 

//output 

// FS:  38     => File request call is extreamly fast
// n/w request:  244


// Why this behavior

// FS Module use Thread Pool. Crypto module also use Thread pool
// http dont use thread pool rather use deligate to OS

// FS came as second after one hash eventhough fs function call 
// is first => FS started first, but there is back and forth to get 
// file information from had diask. During that pause, thread1 will be assigned to 
// hash and it is executed. then when fs is done with first hard disk call
// it is again assigned to thread.