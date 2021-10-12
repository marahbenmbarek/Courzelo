import "./topbar.css";
import { Search, Person, Chat, Notifications } from "@material-ui/icons";
import { Link } from "react-router-dom";
import {useSelector, useDispatch} from 'react-redux'
import React from 'react'

export default function Topbar() {
  const auth = useSelector(state => state.auth)
  const { user } = auth;
  
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="logo">Courzelo Social</span>
        </Link>
      </div>
      <div className="topbarCenter">
        <div className="searchbar">
          <Search className="searchIcon" />
          <input
            placeholder="Search for friend, post or video"
            className="searchInput"
          />
        </div>
      </div>
      <div className="topbarRight">
        <div className="topbarLinks">
          <Link to='/' className="topbarLink">Courzelo</Link>
          
        </div>
        
        <div className="topbarIcons">
          <div className="topbarIconItem">
            <Person />
            
          </div>
          <div className="topbarIconItem">
            <Chat />
            
          </div>
          <div className="topbarIconItem">
            <Notifications />
            
          </div>
          <div className="topbarIconItem">
            <span >{user.name}</span>
          </div>
        </div>
        <Link to={`/profile`}>
          <img
            src={
              user.avatar
            }
            alt=""
            className="topbarImg"
          />
        </Link>
      </div>
    </div>
  );
}
