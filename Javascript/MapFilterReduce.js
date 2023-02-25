const arr=[5,1,3,2,6];

const objects=[
    {   
        id:1,
        name:"sam"
    },
    {   
        id:2,
        name:"ram"
    },
    {   
        id:3,
        name:"dam"
    },
    {   
        id:4,
        name:"ham"
    },
]

//Double

var mapp=arr.map((value)=>{
    return value*2;
})


console.log(mapp)

var mappOutPut=objects.map((value)=>value.name);

console.log(mappOutPut)

var filters=arr.filter((value)=>{
    return value%2;
})

console.log(filters)


var reducers=arr.reduce((acc,curr)=>{
    acc=acc+curr
    return acc ;
},0);

console.log(reducers)


