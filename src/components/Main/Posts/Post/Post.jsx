import React from "react";
import classes from "./Post.module.css";

const Post =  (props) => {
    return (
        <div>
            <div>{props.message}</div>
            <div>{props.likeCount} like on you photo.</div>
            <button>Like!</button>
        </div>
    );
};

export default Post;