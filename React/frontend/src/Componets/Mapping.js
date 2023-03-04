import React from 'react'

function Mapping() {
    const array1=["adhrsh","sam","sunil","rahul","christopher","nolan","james","cameroon"]
    const array2=array1.splice(0,3);
    const array3=array1.slice(3)
  return (
    <div>
        {
            array1.map((index,data)=>{
              return  <h1 key={index}>{data }</h1>
            })
            
        }
        {
            array2.map((data)=>{
                return <h2 style={{color:"red"}}>{data}</h2>
            })
        }
        {
            array3.map((data)=>{
                return <h3>{data}</h3>
            })
        }
    </div>
  )
}

export default Mapping