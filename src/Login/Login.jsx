import React from 'react'
import './login.css'
import { Link } from 'react-router-dom'

function Login() {
  return (
    <>
   <div className="bakgroud">
   <div className="bakgroudRight">
   <img src="\images\fblog.png" alt="" className="bakgroundimg" />
   </div>
   <div className="backgroudLeft">
   <Link to="/Register" className="register" >Register</Link><br></br>
   
   <br/><br/>
   <div className="loginBox">
      <div className="LoginForm">
       <span className="LoginLogo"><center>Login</center></span>

       <div className="inputs">
        <table>
            <tr className='userName'>
                <td > 
                User Name:
                </td>
                <td>
                <input type="text" placeholder='Enter user name' className="username" />
                </td>
            </tr>
            <tr className='Password'>
                <td>
                Password:
                </td>
                <td>
                <input type="password" placeholder='password' className="pasword" />
                </td>
            </tr>
              
        </table>
       </div> 
       <Link to='/Home1'>
       <button className="LoginButton"><center/>Login</button> 
       </Link> 
       <br/><br/>
       <sapn className="frogetpass"><u>Froget password</u></sapn>    
   </div>
   </div>
   </div>
   
   
   </div>
  
   </>
  )
}

export default Login
