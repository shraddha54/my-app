import './online.css'

export default function Online({user}) {
  return (
    
      <li className="friendonline">
            <div className="rightBarProfileimgContainer">
            <img src={user.profilePicture} alt="" className="RightbarProfileimges" />
              <span className="rbaronline"></span>
            </div>
            <span className="rbarusernm">{user.username}</span>
          </li>
    
  )
}
