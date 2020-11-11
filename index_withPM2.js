
// Run using "pm2 start index_withPM2.js -i 0" , last 0 indicate pm2 decides threads
// this laptop have 4 logical cores, so 4 node processes will start 

// PM2 Commands

// -> pm2 list => List all running threads
// -> pm2 show index_withPM2 => More details 
// -> pm2 monit => dashboard view
// -> pm2 delete index_withPM2 => delete all children


const express = require('express')
const crypto = require('crypto');
const app = express();


app.get('/', (req,res)=>{
     // this get executed inside event loop. Below code will take 1 sec to execute
     crypto.pbkdf2('a','b',100000,512,'sha512', ()=>{
     //cb runs after pbkdf2 completes hash
        res.send('Hi there');
     });

    
});

app.get('/fast', (req,res)=>{
    res.send('this was fast')
})

app.listen(3000);