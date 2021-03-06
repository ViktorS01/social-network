import React from "react";
import classes from "./MyPosts.module.css";
import {Post} from "./Post/Post";

export const MyPosts = () => {
    return (
        <div className={classes.main}>
            <img src="https://i.pinimg.com/originals/70/bc/be/70bcbe9be53e7f1a505000827f383914.jpg" alt="BG"/>
            <Post message="It is me!" likeCount="197"/>
            <Post message="It is my mum!" likeCount="105"/>
            <Post message="It is my dog, i love you, baby!" likeCount="89"/>
            <Post message="Breakfast at my work.." likeCount="16"/>
        </div>
    );
};