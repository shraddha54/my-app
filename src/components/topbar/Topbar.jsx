import "./topbar.css"
import SearchIcon from '@mui/icons-material/Search';
import Person3Icon from '@mui/icons-material/Person3';
import ChatIcon from '@mui/icons-material/Chat';
import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications';
import { Link } from "react-router-dom";

export default function Topbar() {
  return (
    <div className="topbarContainer">
        <div className="topbarLeft">
          <Link to="/" style={{textDecoration:"none"}}>
          <span className="logo">SSD</span>
          </Link>
          
        </div>


        <div className="topbarCenter">
          <div className="searchBar">
            <SearchIcon className="searchIcons" />
            <input placeholder="Search for reels/friends/vdos" className="searchInput" />
          </div>
        </div>


        <div className="topbarRight">
          <div className="topbarLinks">
            <span className="topbarLink">Home</span>
            <span className="topbarLink">Timelines</span>
          </div>

          <div className="topbarIcons">
            <div className="topbarIconItem">
            <Person3Icon/>
            <span className="topbarIconcount">1</span>
            </div>

            <div className="topbarIconItem">
            <ChatIcon/>
            <span className="topbarIconcount">2</span>
            </div>

            <div className="topbarIconItem">
            <CircleNotificationsIcon/>
            <span className="topbarIconcount">1</span>
            </div>
            <Link to="/profile">
            <img src="/assets/person/profilephoto.jpg" alt="" className="topbarimg" />
            </Link>
              
          </div>
        </div>
    
    </div>
  );
}
