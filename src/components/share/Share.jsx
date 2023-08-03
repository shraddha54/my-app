import './share.css';
import PermMediaIcon from '@mui/icons-material/PermMedia';
import LabelIcon from '@mui/icons-material/Label';
import RoomIcon from '@mui/icons-material/Room';
import TagFacesIcon from '@mui/icons-material/TagFaces';

export default function Share() {
  return (
   <div className="sharecontainer">
    <div className="shareWrapper">
        <div className="shareTop">
       <img src="./assets/person/profilephoto.jpg" alt="" className="shareprofilepic" />
        
        <input placeholder='Whats in your mind kakashi' className="shareinput" /></div>
        <hr className="shareHr" />
        <div className="shareBottom">
            <div className="shareOptions">
                <div className="share">
                    <PermMediaIcon htmlColor='tomato' className='shareIcon' />
                    <span className="shareoptTxt">Photo or Video</span>
                </div>
                <div className="share">
                    <LabelIcon htmlColor='blue' className='shareIcon' />
                    <span className="shareoptTxt">Tag</span>
                </div>
                <div className="share">
                    <RoomIcon htmlColor='green' className='shareIcon' />
                    <span className="shareoptTxt">Location</span>
                </div>
                <div className="share">
                    <TagFacesIcon htmlColor='goldenrod' className='shareIcon' />
                    <span className="shareoptTxt">Reactions</span>
                </div>
            </div>
            <button className="shareButton">Share</button>
        </div>
    </div>
   </div>
  )
}
