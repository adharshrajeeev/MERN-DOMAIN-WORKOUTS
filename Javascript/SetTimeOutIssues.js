// function cb1(){
//     console.log("Call back1")
// }
// function cb(){
//     console.log("Call back2")
// }

// const newDate=new Date();

// setTimeout(cb1,0)
// const anotherDate=new Date();
// console.log(newDate.getTime()-anotherDate.getTime());
// setTimeout(cb,0);
// console.log(newDate.getTime()-anotherDate.getTime());
// setTimeout(cb,0);

// console.log(newDate.getTime()-anotherDate.getTime());

console.log("START")
setTimeout(()=>{
    console.log("CALLBACK");
},0)


console.log("END")