const https = require('https');

const start = Date.now();

function doRequest(){

    https.request('https://www.google.com', (res)=>{
        res.on('data', ()=>{});
        res.on('end', ()=> {
            console.log(Date.now() - start)
        });
    }).end();

}

doRequest()
doRequest()
doRequest()
doRequest()
doRequest()
doRequest()

// All completed at the same time eventhough only 4 thread pool 


// 329
// 344
// 347
// 349
// 351
// 352

//This behavior is different from pbkdf2 function call where 4 function calls
// were executed in parallal.

// This is because, http network request is handled by OS and not by node

