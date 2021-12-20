"use strict";

function main(){
    const 
        events = require("events"),
        util = require("util")
    ;
    
    let timer=0;
    let multiplysCatched = [];
    let msg="";

    const printer = function (){
            this.getMsg = (number) => {
                
                multiplysCatched.push({number:number,"time passed":timer});

                return `${number} is a multiply of three.`+
                       `\nThis number was catched after, ${timer} seconds...`
            };
    };

    util.inherits(printer,events.EventEmitter) // the best way is create a class, and inherits from this not from an util
    
    let myPrinter = new printer();
    
    myPrinter.on("multiply",(number)=>{
        msg=myPrinter.getMsg(number);
    });

    const clock = ()=>{
        let multiply = Math.floor(Math.random()*10);
        if (multiply%3 === 0){
            myPrinter.emit("multiply",multiply);
            timer=0;
        };

        let multString = "";
        multiplysCatched.forEach(mult => {
            multString+=`\nNumber:${mult.number} Seconds passed:${mult["time passed"]}`
        });

        let today = new Date();
        let formatTime = (time)=>{
            return time<10?`0${time}`
                    :`${time}`
                };
        let time = (
            `${formatTime(
                today.getHours()<12?today.getHours()
                :today.getHours()-12
                )}`+
            `:${formatTime(today.getMinutes())}`+
            `:${formatTime(today.getSeconds())}`);

        console.clear();
        console.log(
            `Currently Time ${time}\n\n`+
            `${msg}\n\n`+
            `seconds passed since catched last three multiply ${timer}`+
            `\n\n(multiplys catched: ${multString})`
            );
        
        timer++;
    };
    setInterval(clock, 1000);
};

main();