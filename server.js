
const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function( req, res){
    res.sendFile(__dirname + "/index.html");
});


app.post("/", function(req, res){
    var num1 = Number(req.body.n1);
    var num2 = Number(req.body.n2);

    var c = num1 + num2; 

    res.send(`the ans is `+ c);
});


app.get("/contact", function(req,res){
    res.send("email me at -- ziafxx@gamil.com")
});


app.listen(3000,()=>{
    console.log("server started on port 3000")
});