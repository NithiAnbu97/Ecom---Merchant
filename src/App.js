import React from 'react';
import { Fragment } from 'react';
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom'
import Auth from './Auth';
import Userselection from './Components/Userselection';
import Wellcome from './Components/Wellcome';
import ProtectedRoute from './ProtectedRoute';

 


function App() {
 return <Fragment>
    <Router>
      <Routes>
        <Route path='/' element={<Auth/>}/>
        <Route element={<ProtectedRoute/>}>
        <Route path='/userSelection' element={<Userselection/>}/>
        <Route path='/wellcome' element={<Wellcome/>}/>
        <Route path='/Login' element={<Login/>}/>
        <Route path='/Register' element={<Register/>}/>

        </Route>
      </Routes>
    </Router>

 </Fragment>
}

export default App;
