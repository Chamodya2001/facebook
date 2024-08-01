import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Register from '../Register/Register'
import Login from '../Login'
import Home1 from '../../pages/Home/Home1';

function LoginInterface() {
  return (
    <div>
      <BrowserRouter>
      <Routes> 
       <Route path='/' element={<Login/>}></Route> 
        <Route path='/Register' element={<Register/>}></Route>
        <Route path='/Home1' element={<Home1/>}></Route>
        


      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default LoginInterface
