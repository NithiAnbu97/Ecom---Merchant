import React, { createContext, useState } from 'react'
 export const UserContext = createContext();

function Context({children}) {
    const [user,setUser] = useState('');
    const [userType,setUserType] = useState('');
    const [messType,setMesstype]= useState('')

  return <>
  <UserContext.Provider value={{user,setUser,userType,setUserType,messType,setMesstype}}>
   {children}
  </UserContext.Provider>
  </>
}

export default Context;