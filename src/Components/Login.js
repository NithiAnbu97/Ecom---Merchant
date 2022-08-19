import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../Context';

const Login = () => {
  const navigate = useNavigate();
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('')
  const [showPass,setShowPass]=useState(false);
  const [loading,setLoading]=useState(false);
  const {setUser} = useContext(UserContext);
  function hidepassword(){
    if(showPass===true) setShowPass(false)
    else setShowPass(true)
  }

  const loginHandler= async()=>{

    let getData = JSON.parse(localStorage.getItem('auth')) ;
    setLoading(true)
    if(!email||!password){
        alert('Fill all the Fields')
         setLoading(false)
    }else if(email!==getData.email){
      alert('Email was not Exist, so Please register!!')
      setLoading(false)
    }else if(password!==getData.password){
      alert('Password was Wrong')
      setLoading(false)
    }else{
      let getData = JSON.parse(localStorage.getItem('auth')) ;
      setUser(getData.name);
      alert(`Welcome back ${getData.name} !!`)
      navigate("/userSelection")
    }
 }

  return <>
    <div className="mb-3">
        <label className="form-label">User Email</label>
         <input type="email" value={email} className="form-control"onChange={(e)=>setEmail(e.target.value)} placeholder="Your Name"/>
     </div>
       <label className="form-label">Password</label>
       <div className="input-group mb-3">
          <input value={password} type={showPass?"text":"password"} className="form-control"onChange={(e)=>setPassword(e.target.value)} placeholder="Password"/>
        </div>
        <div className="form-check d-flex flexDirection-row">
        <input className="form-check-input" type="checkbox" onClick={()=>hidepassword()} id="flexCheckDefault"/>
        &nbsp;&nbsp; <label className="form-check-label" for="flexCheckDefault">
          Show Password 
      </label>
      
      
   </div>
   <div className='d-grid gap-2 col-6 mx-auto mt-4'>
      <button className='btn btn-warning'onClick={()=>loginHandler()}>
      {loading?"Login...":"Login"}
    </button>
      </div>
  </>
}

export default Login