//Call Back function is javascript -- a Function that passed to another function is called callback fucntion

function x(functions){
  console.log("X called");
  functions();                  //callback functions gives us the power of asyncronousity
}

x(function y(){
    console.log("y called")
});
 

setTimeout(()=>{
    console.log("Timer Called");
},5000);



//Blocking the main thread
//Event Listeners
//Closure with event Listeners