"use strict";

console.clear();

function main(){

    const events = require("events");   // it's a moducle from node js
    const util = require("util");       // it's a module from node js
    
    // const teams = function(name){
    //     this.name = name;
    // };
    let teamsCreated=0;
    const teams = function(name){
        this.name = name;
        this.id = teamsCreated++;
    };
        
    util.inherits(teams, events.EventEmitter);

    // const sun = new teams("sun");
    // const rock = new teams("rock");
    // const tree = new teams("tree");
    // const teamArray = [sun,rock,tree,];
    const teamArray = [
        new teams("sun"),
        new teams("rock"),
        new teams("tree"),
    ];

    teamArray.forEach((team)=>{
        team.on("element",(element)=>{
            console.log(
                "Team name: "+team.name+
                " Id: "+team.id+
                " element: "+element
            );
        });
    });

    teamArray[0].emit("element","fire");
    teamArray[1].emit("element","ground");
    teamArray[2].emit("element","nature");
};

main();