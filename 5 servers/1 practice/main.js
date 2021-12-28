"use strict";
console.clear();

/**
 * MY FIRST SERVER IN NODEJS
 * 
 */

function main() {
    const http = require("http");

    const server = http.createServer((req,res)=>{
        console.clear();
        console.log(`req: ${req}\nreq_url:${req.url}`);
        
        // serv headers
        res.writeHead(200,{"Content-Type":"text/plain"});
        // res.writeHead(200,{"Content-Type":"html"});
        
        // serv body
        res.end("Hello World! :=)");
        // res.end(fs.readFileSync("./home.html"));
    });

    console.log("Server Port 8000...");
    //server.listen(port,ipAddress)
    server.listen(8000,"127.0.0.1");
};

main();