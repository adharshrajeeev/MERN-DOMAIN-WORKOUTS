const myObj={               //if we print this in fuyunction it will print the whole object
    a:1,
    b:2,
    c:function(){
        console.log("Hello")
    },
    d:function(){
        console.log(this)
    },
    e:()=>{
       
        console.log(this)
    }
}

// var aa=myObj.d
// console.log(myObj)
// myObj.c();
// console.log(aa)
// myObj.d();
// aa();
// var aaa=myObj.e;
// aaa();

myObj.d=myObj.d.bind(myObj)

const yourObj={
    k:12,
    j:22
}

// var aaFunctio=myObj.d

// aaFunctio.call(yourObj)

var k=myObj.d;
k();