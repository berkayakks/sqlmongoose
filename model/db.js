const mongoose =require("mongoose");

mongoose.connect('mongodb://localhost:27017/oyuncak',{useNewUrlParser:true},(err)=>{
    if(!err)
    {
        console.log("mongo db bağlantısı başarılı")
    }
    else{
        console.log("mongo db bağlantısı başarısız")
    }

})