"use strict";
console.clear();

/**
 * 
 * STREAMERS AND BUFFERS
 * OR telled in better words
 * STREAMERS WITH BUFFERS
 * are a possibility of comunication 
 * we're buffers save the recived data (like a FIFO "FIRST INT FIRST OUT)")
 * and after that  streamer resend this without read or charching in memory
 * it's better than an open reading and writing
 * in the next lesson we're going to learn another way to retransmit this
 * information
 * 
 * using... pipes
 * 
 */

function main(){
    const http = require("http");
    const fs = require("fs");
    console.log(__dirname+"/readme.txt");
    const readStream = fs.createReadStream(__dirname+"/readme.txt","utf-8"); // absolute path
    console.log(__dirname+"/writeme.txt");
    const writeStream = fs.createWriteStream(__dirname+"/writeme.txt","utf-8"); //absolute path


    //readStream.on("otherNameHereDontWork",(chunkc)=>{
    readStream.on("data",(chunkc)=>{
            console.log("New data recived");
            console.log(chunkc);
            writeStream.write("Data recived is:\n\n"+chunkc);
    });

    // console.log("Server port 8000....")
    // myServer.listen("8000","127.0.0.1");
};

main();