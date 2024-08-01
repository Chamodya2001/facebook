import React from 'react';
import "./register.css";
import { useNavigate } from 'react-router-dom';


function Register() {
  const navigate = useNavigate();

  return (
    
    
    <div className="Register">
      
    
      <div className="registerTop">
        
          <span className="registerText">Register</span>
      </div>
      <hr/>
  
      <div className="form">
      
        <table className="formTable">
          <tbody>
          <tr >
            <td className='tdata'>
            Full Name:
            </td>
            <td>
            <input placeholder='kavindu chamodya darmasiri' type="text" className="Reginputs" id='ControlInput1' />
            </td>
          </tr>
  
          <tr >
            <td className='tdata'>
            BirthDay:
            </td>
            <td>
            <input type="date" id="ControlInput2" name="birthday" className="Reginputs"/>
            </td>
          </tr>
  
          <tr >
            <td className='tdata'>
            Age:
            </td>
            <td>
            <input type="text" className="Reginputs"  id='ControlInput3' />
            </td>
          </tr>
  
          
          <tr >
            <td className='tdata'>
            Address:
            </td>
            <td>
            <input type="text" className="Reginputs" id='ControlInput4' />
           </td>
          </tr>
  
          <tr >
            <td className='tdata'>
            Phone Number:
            </td>
            <td>
            <input placeholder='07#-#######' type="text" className="Reginputs" id='ControlInput5' />
            </td>
          </tr>
  
          <tr >
            <td className='tdata'>
            Email:
            </td>
            <td>
            <input placeholder='jone@gmail.com' type="text" className="Reginputs"  id='ControlInput6'/>
            </td>
          </tr>
  
          <tr >
            <td className='tdata'>
            Password:
            </td>
            <td>
            <input  type="password" className="Reginputs" id='ControlInput7'/>
            </td>
          </tr>
          </tbody>
        </table>
        
  
      </div>
      <br/>
  
      <button className='RegBackButton' onClick={()=>navigate(-1)}>Back</button>
      {/* <button type="button" className='saveButton' onClick={}>save</button> */}
      
      </div>
    )
  }
export default Register;
