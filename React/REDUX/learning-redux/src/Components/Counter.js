import { useSelector,useDispatch } from "react-redux";
import { decrease_Count, increase_Count } from "../Redux/Count/countSlice";

function Counter() {
 const count= useSelector(state=>state.count.value);
  const dispatch=useDispatch()

  const increment=()=>{
    dispatch(increase_Count())
  }
  const decrement=()=>{
    dispatch(decrease_Count())
  }
  return (
    <div className="counter">
      <h2>Counter</h2>
      <h3>The count is :{count}</h3>
      <button onClick={increment}>Increase</button>
      <button onClick={decrement}>Decrease</button>
    </div>
  );
}

export default Counter;
