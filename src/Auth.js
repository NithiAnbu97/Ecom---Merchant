import React, { useState } from 'react'
import Login from './Components/Login'
import Register from './Components/Register'

const Auth = () => {
    const [toggle,setToggle]=useState(false)
  return <>
  <div className='auth-container'>
  <div className='auth-title'>
  <h1 class="fs-2 text-dark">Task 1</h1>
      </div>
    <div className='authBox'>
      <div className='auth-btn'>
        <button className={!toggle?"btn btn-warning":"btn"} onClick={()=>setToggle(false)}>Login</button>
        <button className={toggle?"btn btn-warning":"btn"} onClick={()=>setToggle(true)}>Register</button>
      </div>
      <div className='auth-main'>
       {
         toggle?<Register/>:<Login/>
       }
      </div>
    </div>
  </div>
  </>
}

export default Auth