import './post.css';
import {Users} from "../../dummyData";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useState } from 'react';

export default function Post({post}) {
    const [like,setLike] = useState(post.like)
    const [isliked,setisLiked] = useState(false)
    const likeHandler=()=>{
        setLike(isliked ? like-1 : like+1)
        setisLiked(!isliked)

    }
    
  return (
   <div className="post">
    <div className="postWrapper">
        <div className="postTop">
            <div className="postTopL">
                <img src={Users.filter(u=>u.id === post.userId)[0].profilePicture} alt="" className="postLeftimg" />
                <span className="postUserNmae">{Users.filter(u=>u.id === post.userId)[0].username}</span>
                <span className="postUserdate">{post.date}</span>
            </div>
            <div className="postTopR">
                <MoreVertIcon />
            </div>
        </div>
        <div className="postCenter">
            <span className="postText">{post?.desc}</span>
            <img src={post.photo} alt="" className="Postimg" />
        </div>
        <div className="postBottom">
            <div className="postLeftpart">
                <img src="./assets/like.png" onClick={likeHandler} alt="" className="Likeicon1"  />
                <img src="./assets/like2.png" onClick={likeHandler} alt="" className="Likeicon" />
                <span className="likecount">{like} people liked it</span>
            </div>
            <div className="postRightpart">
                <span className="PostCommenttxt">{post.comment} comments</span>
            </div>
        </div>
    </div>
   </div>
  )
}
