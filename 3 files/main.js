"use strict";
console.clear();

function synchronousRead(){
    const fs = require("fs");
    let fileReaded = fs.readFileSync("read me.txt","utf-8");
    console.log(fileReaded);
    fs.writeFileSync("write me.txt",fileReaded);
};

function aSynchronousRead(){
    const fs = require("fs");
    
    fs.readFile("read me.txt","utf-8",function(error,data){
        fs.writeFile("write me.txt",data,function(error){
            if (error){
                console.log("Error: "+error);
            }else{
                console.log("File writed");
            };
        });
        console.log(data);
    });
    
    console.log("I'm the last line in...");
    // fs.writeFileSync("write me.txt",fileReaded);
};

function main(){
    console.log("--------------------Synchronous");
    synchronousRead();
    console.log("--------------------Asynchronous");
    aSynchronousRead();

};

main();