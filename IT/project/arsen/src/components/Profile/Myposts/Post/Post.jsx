import React from "react";
import s from './Post.module.css';


const Post =(props) =>{
  return <div className={s.content}>
      <img src='https://pbs.twimg.com/media/DeBEZEyUQAAPOOV.jpg'/>
      {props.message}
  <div>
     <span>Like</span> {props.likescount};
    </div>
 </div>
}
 export default Post;
