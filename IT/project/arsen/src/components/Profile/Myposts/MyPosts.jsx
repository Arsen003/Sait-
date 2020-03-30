import React from "react";
import s from './MyPosts.modules.css';
import Post from './Post/Post';

const MyPosts =() => {
  return(
<div className={s.content}>
        <div>
        <img src='https://pbs.twimg.com/media/DeBEZEyUQAAPOOV.jpg'/>
        </div>
    <div> ava + description</div>
    <MyPosts/>

    <div className={s.post}>My Posts
    <div className={s.item}></div>
    <div><textarea></textarea></div>
    <button>Add post </button>
  </div>

  <div className={s.posts}>
   <post message='Hi, are you?' Likescount='0'/>
   <post message="It's my first post" Likescount='23'/>
  </div>
</div>);
}
export  default MyPosts;