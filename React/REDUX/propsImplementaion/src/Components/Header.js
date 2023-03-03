function Header({counter,color}) {
  return (
    <div className="header">
      <h1 style={{color}}>REDUX Project</h1>
      <h3> Count is :{counter}</h3>
    </div>
  );
}

export default Header;
