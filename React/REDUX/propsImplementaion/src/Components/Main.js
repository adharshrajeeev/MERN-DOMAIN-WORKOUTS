import Counter from "./Counter";
import Aside from "./Aside";
function Main({counter,setCount,color,setColor}) {
  return (
    <div className="main">
      <Counter counter={counter} setCount={setCount}/>
      <Aside color={color} setColor={setColor}/>
    </div>
  );
}

export default Main;
