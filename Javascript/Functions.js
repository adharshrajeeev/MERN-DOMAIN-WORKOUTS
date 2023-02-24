//Function Statement   Also known as Funtion Declaration
function a(){
    console.log("A Called")
}

//Function Expression               //Difference Between Function Statement and                                     
var b=function (){                  //Function Expression is Hoisting
    console.log("B assigned")
}


//Anonymous Function
// function (){             is used in a place when functions are used in as values

// }

//Named Function Expression

var namedFunction=function name(){
    console.log("Named Function")
}

//Fist Class Functions      ability of a functions to be used like values

//Arrow Functions

var arrowFuncion=()=>{
    console.log("arrow fucntion called");
}