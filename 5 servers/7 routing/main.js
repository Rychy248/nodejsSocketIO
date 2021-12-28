"use strict";
console.clear();

const customStringify = function (v) {
    const cache = new Set();
    return JSON.stringify(v, function (key, value) {
      if (typeof value === 'object' && value !== null) {
        if (cache.has(value)) {
          // Circular reference found
          try {
            // If this value does not reference a parent it can be deduped
           return JSON.parse(JSON.stringify(value));
          }
          catch (err) {
            // discard key if value cannot be deduped
           return;
          }
        }
        // Store value in our set
        cache.add(value);
      }
      return value;
    });
};


function main() {
    
    const http = require("http");
    const fs = require("fs");
    const server = http.createServer((req,res)=>{
        // console.log(`req: ${JSON.stringify(customStringify(req))}`);
        console.log(`req_url:${req.url}`);
        
        if (req.url === "/home" || req.url === "/"){
            res.writeHead(200,{"Content-Type":"text/html"});
            fs.createReadStream(__dirname+"/index.html").pipe(res);
        }else if(req.url == "/about"){
            res.writeHead(200,{"Content-Type":"text/html"});
            fs.createReadStream(__dirname+"/about.html").pipe(res);
        }else{
            res.writeHead(404,{"Content-Type":"text/html"});
            fs.createReadStream(__dirname+"/404.html").pipe(res);
        };
        
    });

    console.log("Server Port 8000...");
    
    server.listen(8000,"127.0.0.1");
};

main();