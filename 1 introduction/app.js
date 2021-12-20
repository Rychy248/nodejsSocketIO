"use strict";
console.clear();
console.log('Hello world');


let count=0;

function myCallback(){
    console.log("\n\n"+`The currently path:\n${__dirname}`)
    console.log(`File Name:\n${__filename}`) 
};

const timer = setInterval((cb=myCallback)=>{
    count+=2;
    console.log(`${count} seconds have passed...`);
    if (count>6){
        clearInterval(timer);
        cb()
        setTimeout(()=>{
            console.clear();
        },4000);
    };
},2000);
