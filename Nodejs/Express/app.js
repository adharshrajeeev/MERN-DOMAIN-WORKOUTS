const express=require('express');
const app=express();


const datas=[1,2,3,4,5,6]

app.get('/',(req,res)=>{
    res.status(200).json({status:"Good",data:"server created at port 3000"})
})

app.get('/user',(req,res)=>{
    res.status(200).json({status:"Good",data:datas})

})


app.listen(3000,()=>console.log("server created at port 3000"));