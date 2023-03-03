
function Aside({color,setColor}) {
 
  const changeColor=()=>{
    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    var RGBColor = "rgb(" + x + "," + y + "," + z + ")";  
    setColor(RGBColor)
  }

  return (
    <div className="aside">
      <h2 style={{color:color}}> Aside</h2>
      <button onClick={changeColor}>Change Color</button>
    </div>
  );
} 

export default Aside;
