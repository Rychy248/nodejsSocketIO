"use strict";

const prtData = require("./module2");



function passData(data){
    console.log(
        `I'm the module one`+
        `\ngive me a litle moment I put your data in the screen`+
        `\nwith the module2 help....\n`
    );
    setTimeout(prtData(data),2000)
};

module.exports = passData;
