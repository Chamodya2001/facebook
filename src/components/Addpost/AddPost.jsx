import React from 'react'
import './addpost.css'
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import AddLocationIcon from '@mui/icons-material/AddLocation';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import LiveTvIcon from '@mui/icons-material/LiveTv';


function AddPost() {
  return (
   <div className="addpost">
    <div className="addpostContainer">
    <div className="addpostop">
        <img src="\images\download.jpeg" alt="" className="addpostpic" />
        <input  placeholder='What is your mind...?'type="text" className="addpostInput" />
        
</div>
<hr className="postHr" />
 <div className="addpostbotom">
      <div className="addpostOptions">

        <div className="addpostOption">
        <AddAPhotoIcon htmlColor='green' className='addphoto1'/>
        <span className="addphotoOptionText">Add photo/video</span>
        </div>

        <div className="addpostOption">
        <AddLocationIcon className='addphoto2'/>
        <span className="addphotoOptionText">Add Location</span>
        </div>

        <div className="addpostOption">
        <LocalOfferIcon className='addphoto3'/>
        <span className="addphotoOptionText">Add Tag</span>
        </div>

        <div className="addpostOption">
        <LiveTvIcon className='addphoto4'/>
        <span className="addphotoOptionText">Go Live</span>
        </div>
        <button className="postButton">Post</button>
      </div>
      
 </div>
    </div>
   
   </div>
  )
}

export default AddPost
