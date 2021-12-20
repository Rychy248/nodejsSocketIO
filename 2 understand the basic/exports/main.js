"use strict";
console.clear();
const userMg = require("./userMain.js");

function printUser(obj){
    return new Promise((resolve,reject)=>{
    let data = obj;
    let funcs = Object.keys(userMg);
    let i=0;
    
    const forTimed = setInterval(() => {
        if (funcs.length === i){
            clearInterval(forTimed);
            resolve();
        }else{
          console.clear();
            let key = funcs[i]
            console.log(userMg[key](data[key]));
            i++;
        };
    }, 2000);
    });
};
function printUserData(arrayObj,index){
    
    if (!isNaN(index)){
        if (index < arrayObj.length){
            console.clear();
            console.log(arrayObj[index]," ",(index < arrayObj.length))

            printUser(arrayObj[index])
	        .then(() => {printUserData(arrayObj,++index);})
	        .catch(error => console.error(error));
        };
    }else{
        printUserData(arrayObj,0);
    };
};


function main(){
    // console.log(typeof(userMg),userMg,"\n"); Just to check the import things

    const myData = [
        {user:"Rychy",email:"jorgeajrha@gmail.com",id:"1"},
        {user:"Nietzsche",email:"nietzsche@gmail.com",id:"2"},
        {user:"Brey",email:"brey@gmail.com",id:"3"},
    ];

    printUserData(myData);
    console.clear();
};

main()