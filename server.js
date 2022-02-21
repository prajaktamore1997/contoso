var express =require("express");  
var app=express(); 
var onAboutUs=function(req, res){
    res.send("219108_PrajaktaMore");
};
var onDefault=function(req, res){
    res.send("<h1> CONTOSO Ltd. </h1>"+
              "<hr/>"+
              "<ol>"+
                    " <li>Finance</li>"+
                    " <li>Marketing</li>"+
                    " <li>Production</li>"+
                    " <li>Human Resources</li>"+
             "</ol>");
};
app.get("/",onDefault);  
app.get("/aboutus",onAboutUs); 
var server=app.listen(8081);
console.log("Server is running on port 8081");
