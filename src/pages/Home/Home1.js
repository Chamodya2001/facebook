import React from 'react'
import NavBar from '../../components/Navigation/NavBar'
import Leftplane from '../../components/Leftplane/Leftplane'
import Rightplane from '../../components/Rightplane/Rightplane'
import Post from '../../components/Post/Post'
import "./home.css"

function Home1() {
  return (
    <div>
        <NavBar></NavBar>
  
        <div className="navBox">
          
       <div className='Left'><Leftplane/></div>
       <div className='Post'><Post/></div> 
       <div className='Right'><Rightplane/></div>
       

        
        </div>


        
        </div>
    
    
  )
}

export default Home1
