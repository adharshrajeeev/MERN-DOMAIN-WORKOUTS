const express=require('express');
const app=express();
require('dotenv').config();

const PORT=process.env.ServerPort;

app.use(express.json());
app.use(express.urlencoded({extended:true}));

const token="123";

function Token(req,res,next){
    console.log("Creating token")
    next();
}

app.get("/profile",Token,(req,res)=>{
    console.log("USER LOGGED")

    res.send("<h1>Sucess</h1>")
})


    

app.listen(PORT,()=>console.log(`SERVER STARTING AT PORT ${PORT}`));