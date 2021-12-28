"use strict";
console.clear();

function main() {
    
    const http = require("http");

    const server = http.createServer((req,res)=>{
        console.log(`req: ${req}\nreq_url:${req.url}`);
        
        res.writeHead(200,{"Content-Type":"application/json"});
        res.end(JSON.stringify(require("./data")));
        
    });

    console.log("Server Port 8000...");
    
    server.listen(8000,"127.0.0.1");
};

main();