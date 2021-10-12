import "./share.css";
import {
  PermMedia,
  Label,
  Room,
  EmojiEmotions,
  Cancel,
} from "@material-ui/icons";
import {useSelector, useDispatch} from 'react-redux'

import { useContext, useRef, useState } from "react";
import axios from "axios";
import React from 'react'
export default function Share() {
  
  const auth = useSelector(state => state.auth)
  const token = useSelector(state => state.token)
  const { user } = auth;
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const desc = useRef();
  const [img, setimg] = useState(false)

  const submitHandler = async (e) => {
    e.preventDefault();
    const newPost = {
      userId: user._id,
      desc: desc.current.value,
      img: img
    };
   
    try {
      await axios.post("/post", newPost ,{
        headers: {Authorization: token}
    });
      window.location.reload();
    } catch (err) {}
  };
  
  const uploadHandler = async(e) => {
    e.preventDefault()

    const file = e.target.files[0]

    if (!file) return this.state;

    if (file.size > 1024 * 1024)
      return this.state

    if (file.type !== 'image/jpeg' && file.type !== 'image/png')
      return this.state;

    let formData = new FormData()
    formData.append('file', file)


    const res = await axios.post('/api/upload_avatar', formData, {
      headers: { 'content-type': 'multipart/form-data', Authorization: token }
    }).then(res => {
      setimg(res.data.url)
      
    })
  }
  return (
    <div className="share">
      <div className="shareWrapper">
        <div className="shareTop">
          <img
            className="shareProfileImg"
            src={
              user.avatar
              
            }
            alt=""
          />
          <input
            placeholder={"What's in your mind " + user.name + "?"}
            className="shareInput"
            ref={desc}
          />
        </div>
        <hr className="shareHr" />
        
        <form className="shareBottom" onSubmit={submitHandler}>
          <div className="shareOptions">
            <label htmlFor="file" className="shareOption">
              <PermMedia htmlColor="tomato" className="shareIcon" />
              <span className="shareOptionText">Photo or Video</span>
              <input
                style={{ display: "none" }}
                type="file"
                id="file"
                onChange={(e)=>uploadHandler(e)}
            
              />
            </label>
            <div className="shareOption">
              <Label htmlColor="blue" className="shareIcon" />
              <span className="shareOptionText">Tag</span>
            </div>
            <div className="shareOption">
              <Room htmlColor="green" className="shareIcon" />
              <span className="shareOptionText">Location</span>
            </div>
            <div className="shareOption">
              <EmojiEmotions htmlColor="goldenrod" className="shareIcon" />
              <span className="shareOptionText">Feelings</span>
            </div>
          </div>
          <button className="shareButton" type="submit">
            Share
          </button>
        </form>
      </div>
    </div>
  );
}
