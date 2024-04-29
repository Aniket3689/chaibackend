require("dotenv").config()
const express=require("express");
const app=express();
const port=3000;

app.get("/",(req ,res)=>{
    console.log("aniket");
    res.send("kii aniket")
})

app.listen(process.env.port,()=>{
    console.log(`app is listen omn port no is ${port}`);
})