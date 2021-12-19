console.clear();
// normal declaration function
function orange(){
    console.log("HI there i'm an beaty orange");
};
orange();

// function expression
let red = function (){
    console.log("\nHi there i'm the red var, who contains a function (it's mean a function expression)")
};
red();

// callback function

let iAmGrettin = function (){
    return "'hi therer  i return this messegue'";
};

let callBack = function(func){
    console.log("I'am calling a function, it's mean");
    console.log("a calling a back another function;");
    console.log(func());
}

callBack(iAmGrettin);
