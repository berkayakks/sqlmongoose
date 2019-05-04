const express =require("express");
var app =express.Router();


app.get("/anasayfa",(req,res)=>{
    res.send("anasayfaya hoşgeldin");
})

module.exports =app;