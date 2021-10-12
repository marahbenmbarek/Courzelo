import "./closeFriend.css";
import React from 'react'
export default function CloseFriend({user}) {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  return (
    <li className="sidebarFriend">
      <img className="sidebarFriendImg" src={PF+user.avatar} alt="" />
      <span className="sidebarFriendName">{user.name}</span>
    </li>
  );
}
