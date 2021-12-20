"use strict";
// in js it's a core module built into

// https://nodejs.dev/learn/the-nodejs-event-emitter
// https://nodejs.org/api/events.html

const events = require("events"); // its module of nodejs no mine

/**
 * it's like jquery
 * 
 * elements.on("click",function(){   // it is a lister click event
 * 
 * });
 * 
 * the idea is AN EVENT MODULE return AN EVENT EMITTER, and that is an constructor
 * 
 */


const myEmitter =  new events.EventEmitter;
myEmitter.on("test", function (arg){
    console.log("The argument passed is: ",arg);
});

myEmitter.emit("test","'Hi there how are you?'");