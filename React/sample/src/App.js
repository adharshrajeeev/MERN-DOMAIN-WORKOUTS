import {ToastContainer,toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
function App() {

  const notify=()=>{
    toast('🦄 Wow so easy!', {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: false,
      progress: undefined,
      theme: "dark",
      });
  }
  return (
    <div className="App">
      <button onClick={notify}>Notify!</button>
      <ToastContainer/>
    </div>
  );
}

export default App;
  