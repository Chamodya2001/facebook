import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import MessageIcon from '@mui/icons-material/Message';
import SettingsIcon from '@mui/icons-material/Settings';
import "./navbar.css";

function NavBar() {
  return (
    
     <div className="navBarBox">
        <div className="navBarLeft">
            
            <span className="logo">fakebook</span>
        </div>
        <div className="navBarCenter">
            <div className="serchBarBox">
              <SearchIcon className='SearchIcon'/>
              <input placeholder='serch For your freind' className="serchInput" />
            </div>
        </div>
        <div className="NavBarRight">
           <div className="navBarLinks">
              <span className="navBarLink">HomePage</span>
              <span className="navBarLInk">Profile</span>
           </div>
           </div>
            <div className="navBarIcons">
                <div className="navBarIcon">
                    <PersonAddIcon/>
                    <span className="iconTag">5</span>
                </div>
                <div className="navBarIcon">
                    <MessageIcon/>
                    <span className="iconTag">3</span>
                </div>
                <div className="navBarIcon">
                    <SettingsIcon/>
                    <span className="iconTag">2</span>
                </div>
                <div className="pic">
                    <img src="\images\download.jpeg" alt="" className="profilePicImg" />
                </div>
            </div>

     </div>
         
  )
}

export default NavBar
