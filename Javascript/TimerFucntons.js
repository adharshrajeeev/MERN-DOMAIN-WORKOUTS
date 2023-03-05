var intervalID=setInterval(()=>{
    console.log("Setinterval called")
},1000)



setTimeout(()=>{
  clearInterval(intervalID)
},5000);