"use strict";
console.clear();

/**
 * 
 * PIPES
 * are similar to STREAMERS
 * resend information to another place with them
 * using... pipes
 * 
 */

function streaming(){
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
};


function pipe(){
    const http = require("http");
    const fs = require("fs");
    console.log(__dirname+"/readme.txt");
    const readStream = fs.createReadStream(__dirname+"/readme.txt","utf-8"); // absolute path
    console.log(__dirname+"/writeme.txt");
    const writeStream = fs.createWriteStream(__dirname+"/writeme.txt","utf-8"); //absolute path

    //readStream.on("otherNameHereDontWork",(chunkc)=>{
    readStream.pipe(writeStream);
};


function main(){
    
    streaming(); // listen data manually with stream
    
    const trigger = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const fs = require("fs");
            console.log("writeme.txt deleted....")
            fs.unlinkSync(__dirname+"/writeme.txt");
            resolve("\nPipe trigged...\n\n");
            pipe();
        },2000);
    });

    trigger
    .then((res)=>{
        console.log(res);
    })
    .catch(err=>{
        console.log("ERROR RAICED: "+err);
    });

};

main();