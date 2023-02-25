

let count=0
document.getElementById("button1").addEventListener(("click"),()=>{
  fetch('https://jsonplaceholder.typicode.com/posts').then((data)=>{
    console.log(data.json);
  })
})




