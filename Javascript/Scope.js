let a=20;
var b=40;

console.log(a,b)

function c(){
    let a=100;
    var b=400;
    console.log(a,b)
    function d(){
        let a=1000;
        var b=4000;
        console.log(a,b)
        function e(){
            console.log(a,b)
            let a=10000;
            var b=40000;
            return `${a,b}`
        }
        return `${a,b}`
        console.log(a,b)
    }
    console.log(a,b)
    return `${a,b}`
}
console.log(a,b)

c();