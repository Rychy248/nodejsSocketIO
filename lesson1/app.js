"use strict";
console.clear();
console.log('Hello world');


let count=0;

const timer = setInterval(()=>{
    count+=2;
    console.log(`${count} seconds have passed...`);
    if (count>6){
        clearInterval(timer);
        myCallback()
    };
},2000);

function myCallback(){
    console.log("\n\n"+`The currently path:\n${__dirname}`)
    console.log(`File Name:\n${__filename}`) 
};