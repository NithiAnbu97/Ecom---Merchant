import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
const Register = () => {

  const navigate = useNavigate("");
  const [name,setName]=useState('');
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
  const [re_pasword,setRe_password]=useState('')
  const [loading,setLoading]=useState(false);

  const submitHandler = ()=>{
    setLoading(true)  
    if(!name || !email || !password ){
        setLoading(false);
      alert("Fill all the Required fields")
    }else if(password!==re_pasword){
      setLoading(false);
      alert("Password not Matched")
    }else{
     setLoading(false)  
     localStorage.setItem('auth',JSON.stringify({name:name,email:email,password:password}));
     alert('Registration was successful')
     navigate("/userSelection")
    }
  }
  return <>
    <div className="mb-2">
        <label  className="form-label">Name</label>
         <input type="text" className="form-control" placeholder="Your Name" onChange={(e)=>setName(e.target.value)} required/>
     </div>
     <div className="mb-2">
        <label  className="form-label">Email Address</label>
         <input type="email" className="form-control" onChange={(e)=>setEmail(e.target.value)} placeholder="Your Name" required/>
     </div>
        <label  class="form-label mt-1">Create Password</label>
        <input type="text" placeholder='Password'  class="form-control"onChange={(e)=>setPassword(e.target.value)}  required/>
        <label for="inputPassword5" className="form-label mt-1">Confirm Password</label>
        <input type="text" placeholder='Re-enter Password'  class="form-control"onChange={(e)=>setRe_password(e.target.value)}  required/>
      <div className='d-grid gap-2 col-6 mx-auto mt-4'>
        <button onClick={()=>submitHandler()} className="btn btn-warning">
        {loading?"loading..":"Register"}
        </button>
     </div>
  </>
}

export default Register