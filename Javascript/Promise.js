function fetchUser(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const data = { id: 123, name: "John Doe", email: "john.doe@example.com" };
            if(data){
                resolve(data)
            }else{
                reject("failed to fetch details")
            }
        },3000)
    })
}


fetchUser().then((data)=>{
    console.log(data)
}).catch((err)=>{
    console.log(err)
})
