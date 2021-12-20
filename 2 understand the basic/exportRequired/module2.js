"use strict";

// this is callback function, a callback funtion dont return anything, that's why
// y print it here and not return it, the callback function is data
// data return the real function callback
function prtData(data){
    return function(){
        console.log(`\nsomeone send me this '${data}'`);
    };
};

module.exports = prtData;
