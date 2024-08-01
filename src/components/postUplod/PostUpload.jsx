import React from 'react'
import './postupload.css'


function PostUpload(props) {
  return (
   <div className="post">
     <div className="postContainer">
         <div className="postTop">
            <img src="\images\download.jpeg" alt="" className="uploadPerson" />
            <span className="postUserName">kavindu Chamodya</span>
            <span className="postTime">5 min ago</span>
            </div> 
         <div className="postCenter">
            <div className="postCaption">
                {props.dis}
            </div>
            <img src={props.photo} alt="" className="postedImg" />
         </div>
         <div className="postBottom">
            <div className="postBottomLeft">
                <div className="reactionPic">
                   <img src='\images\like.png' alt="" className="react" />
                   <img src="\images\hart.png" alt="" className="react" />
                   <img src="\images\haha.jpeg" alt="" className="react" />
                   <span className="likecount">male and 255 others</span>
                
                </div>
                </div>
                
                <div className="postbottmRight">
                    <span className="comment">
                        15 comments
                    </span>
                </div>
                <div className="shear">.3 share</div>

                
            
         </div>
         </div>   

   </div>



  )
}

export default PostUpload
