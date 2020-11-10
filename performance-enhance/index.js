
// get the cluster module
const cluster = require('cluster');

console.log(cluster.isMaster);
// Is file being executed in master mode ?

if (cluster.isMaster) {
    // Cause index.js to be executed again in child mode
    cluster.fork(); // 1st child
    cluster.fork(); // 2nd child
    // cluster.fork(); // 3rd child
    // cluster.fork(); // 4th child
} else {
    // I am child, I am going to act like a server and nothing else
    const express = require('express')
    const app = express();

    function doWork(duration){
        const start = Date.now();
        while(Date.now() - start < duration) {

        }
    }

    app.get('/', (req,res)=>{
        doWork(5000); // this get executed inside event loop.
        // Event loop is blocked for 5 seconds. Browser will see the 
        // page content only after 5 seconds.
        res.send('Hi There')
    })

    app.get('/fast', (req,res)=>{
        res.send('this was fast')
    })

    app.listen(3000);
};