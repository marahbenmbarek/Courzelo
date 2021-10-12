import { useContext, useEffect, useState } from "react";
import Post from "../post/Post";
import Share from "../share/Share";
import "./feed.css";
import axios from "axios";
import {useSelector, useDispatch} from 'react-redux'
import React from 'react'
export default function Feed({ username }) {
  const [posts, setPosts] = useState([]);
  const auth = useSelector(state => state.auth)
  const token = useSelector(state => state.token)
  const { user } = auth;

  useEffect(() => {
    const fetchPosts = async () => {
      const res = username
        ? await axios.get("/post/profile/" + username ,{
          headers: {Authorization: token}
      })
        : await axios.get("post/timeline/all" ,{
          headers: {Authorization: token}
      });
      setPosts(
        res.data.sort((p1, p2) => {
          return new Date(p2.createdAt) - new Date(p1.createdAt);
        })
      );
    };
    fetchPosts();
  }, [username]);

  return (
    <div className="feed">
      <div className="feedWrapper">
        {(!username || username === user.name) && <Share />}
        {posts.map((p) => (
          <Post key={p._id} post={p} />
        ))}
      </div>
    </div>
  );
}
