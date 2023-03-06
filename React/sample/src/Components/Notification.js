import React from 'react'
import {ToastContainer,toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

function Notification() {
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
    <div>
         <button onClick={notify}>Notify!</button>
      <ToastContainer/>
    </div>
  )
}

export default Notification