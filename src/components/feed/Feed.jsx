import Post from '../post/Post'
import Share from '../share/Share'
import './feed.css'
import {Posts} from "../../dummyData";

export default function feed() {
  return (
   <div className="feedContainer">
    <div className="feedWrapper">
      <Share/>
      {Posts.map((p) =>(
        <Post key={p.id} post ={p}/>
      ))}
      
    </div>
   </div>
  )
}
