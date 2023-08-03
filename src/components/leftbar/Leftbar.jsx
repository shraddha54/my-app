import './leftbar.css';
import RssFeedIcon from '@mui/icons-material/RssFeed';
import ChatIcon from '@mui/icons-material/Chat';
import PlayCircleFilledIcon from '@mui/icons-material/PlayCircleFilled';
import Groups2Icon from '@mui/icons-material/Groups2';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import HelpIcon from '@mui/icons-material/Help';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import SchoolIcon from '@mui/icons-material/School';
import {Users} from "../../dummyData";
import ClosrFriend from '../closeFriend/ClosrFriend';

export default function Leftbar() {
  return (
    <div className="LeftbarContainer">
      <div className="LeftbarWrapper">
        <ui className="leftList">
          <li className="LeftListitem">
            <RssFeedIcon className='LeftbarfeedIcon'/>
            <span className="Leftbaricontext">Feed</span>
          </li>

          <li className="LeftListitem">
            <ChatIcon className='LeftbarfeedIcon'/>
            <span className="Leftbaricontext">Chats</span>
          </li>

          <li className="LeftListitem">
            <PlayCircleFilledIcon className='LeftbarfeedIcon'/>
            <span className="Leftbaricontext">Videos</span>
          </li>

          <li className="LeftListitem">
            <Groups2Icon className='LeftbarfeedIcon'/>
            <span className="Leftbaricontext">Groups</span>
          </li>

          <li className="LeftListitem">
            <BookmarkIcon className='LeftbarfeedIcon'/>
            <span className="Leftbaricontext">Bookmarks</span>
          </li>

          <li className="LeftListitem">
            <HelpIcon className='LeftbarfeedIcon'/>
            <span className="Leftbaricontext">Questions</span>
          </li>

          <li className="LeftListitem">
            <WorkOutlineIcon className='LeftbarfeedIcon'/>
            <span className="Leftbaricontext">Jobs</span>
          </li>

          <li className="LeftListitem">
            <CalendarMonthIcon className='LeftbarfeedIcon'/>
            <span className="Leftbaricontext">Events</span>
          </li>

          <li className="LeftListitem">
            <SchoolIcon className='LeftbarfeedIcon'/>
            <span className="Leftbaricontext">Courses</span>
          </li>

        </ui>
        <button className='LeftbarButton'>Show more</button>
        <hr className='LeftbarHr'/>

        <ui className="LeftbarfrndList">
          {Users.map((u)=>(
            <ClosrFriend key={u.id} user={u} />
          ))}
        </ui>
      </div>
    </div>
  )
}
