import React from "react";

export const Post = (props) => {
    return (
        <div>
            <div>{props.message}</div>
            <div>{props.likeCount} like on you photo.</div>
            <button>Like!</button>
        </div>
    );
};