import React from 'react'
import swal from 'sweetalert';

import './App.css'
function popup(){
  swal({
    title: "Success!",
    text: "OTP entered successfully!",
    icon: "success",
    button: "OK!",
  });
}


function App() {
  return (
    
    <div class="form-container">
      <form class="register-form">
        <input
          id="Phone"
          class="form-field"
          type="text"
          placeholder="Enter your Phone"
        />
        <input
          id="OTP"
          class="form-field"
          type="text"
          placeholder="Enter your OTP"
        />
        
        <button onClick={popup} type ="button">
          Register
        </button>
        


      </form>
    </div>
  )
}

export default App