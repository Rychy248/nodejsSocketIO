"use strict";
function dir(filedir){
    return `${__dirname}/views/${filedir}`
};

function main() {
    const express = require("express");
    const bodyParser = require("body-parser");

    const app = express();
    var urlencodedParser = bodyParser.urlencoded({ extended: false });

    app.set("view engine","ejs");
    // Middleware
    app.use("/assets",express.static("assets"));

    app.get("/",(req, res)=>{
        res.render("home");
    });
    app.get("/home",(req, res)=>{
        res.render("home");
    });
    app.get("/products",(req, res)=>{
        res.render("products");
    });
    app.get("/reviews",(req, res)=>{
        res.render("reviews");
    });
    app.get("/about/GET",(req, res)=>{
            res.render("aboutGET",{qs:req.query});
    });
    app.get("/about/POST",urlencodedParser, (req,res)=>{
        res.render("aboutPOST",{ps:req.body});
    });

    app.post("/about/POST",urlencodedParser, (req,res)=>{
        res.render("aboutPOST",{ps:req.body});
    });

    app.get("/profile/:id",(req, res)=>{
        const data = {
            name:"rychy",
            age:21,
            job:"developer",
            email:"email@mail.com",
            friends:["William","fred","Jhon","Karly","Jean"]
        };
        res.render("profile",{person:req.params.id,data:data});
    });
    app.get("/*",(req, res)=>{
        res.render("404");
    });
    
    app.listen("3000","127.0.0.1");

};

main();