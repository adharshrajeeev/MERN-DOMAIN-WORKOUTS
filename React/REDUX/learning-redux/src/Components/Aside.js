import { useSelector,useDispatch } from "react-redux";
import {change_Color} from '../Redux/color/colorSlice'

function Aside() {

  const color=useSelector(state =>state.color.value)
  const dispatch=useDispatch()

  const changeColor=()=>{
    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    var RGBColor = "rgb(" + x + "," + y + "," + z + ")"; 
    dispatch(change_Color({
     
      color:RGBColor
    }))
  }
  return (
    <div className="aside">
      <h2 style={{color}}> Aside</h2>
      <button onClick={changeColor}>Change Color</button>
    </div>
  );
}

export default Aside;
