import React from 'react'
import "./post.css"
import AddPost from '../Addpost/AddPost'
import PostUpload from '../postUplod/PostUpload'
import VideoUpload from '../postUplod/VideoUpload'

function Post() {
  return (
    <div>
        
     <div className="PostBox">
      <AddPost/>
      <PostUpload photo="\images\my.jpeg" dis="Hellow I am Batman...!"/>
      <PostUpload photo="\images\my2.jpeg" dis="piburathwa..!"/>
      <PostUpload photo="\images\my3.jpeg" dis="1"/>
      <PostUpload photo="\images\my4.jpeg" dis="1"/>
      <PostUpload photo="\images\my5.jpeg" dis=" For Hand To Brand 🔶
One band, countless memories!
 💫 Order your campus hand band now and keep the spirit  of your alma mater alive wherever you go. 

⭕Order Now .
https://forms.gle/1jFf6eW2DFZVYUx68

⭕ Closing Date : 18th Of May 2024⭕"/>

<VideoUpload vid="\vedio\vid1.mp4" dis="Tatoo loke..."/>
<VideoUpload vid="\vedio\vid2.mp4" dis="sundara koriya❤️..."/>
<PostUpload photo="\images\my6.jpeg" dis="1"/>

      
      
      </div> 
    </div>
  )
}

export default Post
