require("./model/db");
const express = require("express");
 const oyuncakController = require("./controllers/oyuncakController");


var app =express();

app.listen(8080,()=>{
    console.log("bağlantı sağlandı portunuz : 8080");
})

app.use("/",oyuncakController);