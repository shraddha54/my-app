import './closeFriend.css'

export default function ClosrFriend({user}) {
  return (
    <li className="Leftfrnd">
    <img src={user.profilePicture} alt="" className="Lfrndimg" />
    <span className="LfrndName">{user.username}</span>
  </li>
  )
}
