const express=require('express');
const app=express();
const cookieParser=require('cookie-parser')



app.use(express.json());
app.use(cookieParser())
app.use(express.urlencoded({extended:true}));

app.use(function(err,req,res,next){
    res.status(500).json("SOMETHING WENT WROING")

})


// function Token(req,res,next){
//     console.log("Creating token")
//     next();
// }

// app.get("/profile",Token,(req,res)=>{
//     console.log("USER LOGGED")

//     res.send("<h1>Sucess</h1>")
// })


app.get('/',(req,res)=>{
    res.send("HELLO IAM HERE")
})


app.post('/userData',(req,res)=>{
    console.log(req.body)
    res.status(200).json({data:req.body.name})
});



    
var PORT=4001;
app.listen(PORT,()=>console.log(`SERVER STARTING AT PORT ${PORT}`));