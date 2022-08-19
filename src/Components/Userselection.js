import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../Context'

function Userselection() {
  const {user,setUser,setUserType} = useContext(UserContext);
  const navigate = useNavigate(""); 
  useEffect(()=>{
    let getData = JSON.parse(localStorage.getItem('auth')) ;
    setUser(getData.name);
    // eslint-disable-next-line
  },[])

  const logout=()=>{
    setUser('');
    navigate('/')

  }

  const UserType =(type)=>{
    setUserType(type)
    navigate('/wellcome')
  }
  return <>
  <div className='container'>
    <div className='header'>
      <h1>Choose Category {user} !!</h1>
      <div><button className='btn btn-danger' onClick={()=>logout()}>Logout</button></div>
    </div>
    <h2 style={{textAlign:"center",marginTop:"30px",marginBottom:"20px"}}>User Selection</h2>
    <div className='user-select'>
      <div className='col'>
        <img className='img' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdcwwJ0PKHCbJrKMG0jAoEVxksaOnLW8R5qRNOn7nqHVZQB2I_dy6-M_v4GL-dUOcKjpc&usqp=CAU' alt="Merchant"/>
        <div><button className='btn btn-warning' onClick={()=>UserType('Merchant')}>Merchant</button></div>
      </div>
      <span style={{display:'flex',alignItems:"center",fontSize:"25px"}}>Or</span>
      <div className='col'>
        <img className='img' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdfFTRIxx7oSl6s1I-dPETUTK867AHnka493EQydBRrUHE4MX5-vY0r3jwL2hY0rHKDo4&usqp=CAU' alt="customer"/>
        <div><button className='btn btn-warning' onClick={()=>UserType('Customer')}>Customer</button></div>
      </div>
    </div>
  </div>
  </>
}

export default Userselection