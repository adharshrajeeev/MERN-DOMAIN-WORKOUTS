
function Counter({counter,setCount}) {


  const increment=()=>{
    setCount(counter + 1)
  }

  const decrement=()=>{
    setCount(counter - 1)
  }
  return (
    <div className="counter">
      <h2>Counter</h2>
      <h3>The count is : {counter}</h3>
      <button onClick={increment}>Increase</button>
      <button  onClick={decrement}>Decrease</button>
    </div>
  );
} 

export default Counter;
