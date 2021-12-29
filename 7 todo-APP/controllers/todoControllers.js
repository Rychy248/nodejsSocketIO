let data = [{item:"Feed the dog"},{item:"Learn nodejs"},{item:"Drink water"}];
const bodyParser = require("body-parser");
var urlencodedParser = bodyParser.urlencoded({ extended: false });

module.exports = (app) => {
    // url
    app.get("/todo",(req, res)=>{
        res.render("todo",{todo:data});
    });

    app.post("/todo",urlencodedParser,(req, res)=>{
        data.push(req.body);
        res.json(data);
    });

    app.delete("/todo/:item",(req, res)=>{
        data = data.filter((todo) =>{ todo.item.replace(/ /g, "-")!== req.params.item});
        res.json(data);
    });

    app.get("/*",(req, res)=>{
        res.render("404");
    });
    
};