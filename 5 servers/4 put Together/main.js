"use strict";
console.clear();

function main() {
    const http = require("http");
    const fs = require("fs");

    const server = http.createServer((req,res)=>{
        console.log(`req: ${req}\nreq_url:${req.url}`);
        
        res.writeHead(200,{"Content-Type":"text/plain"});
        const readStream = fs.createReadStream(__dirname+"/readme.txt","utf-8");
        // const writeStream = fs.createWriteStream(__dirname+"/writeme.txt","utf-8");
        // readStream.pipe(writeStream);

        readStream.pipe(res); // piping the response
        // res.end("Hello World! :=)");
        
    });

    console.log("Server Port 8000...");
    
    server.listen(8000,"127.0.0.1");
};

main();