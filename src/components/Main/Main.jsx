import React from "react";
import classes from "./Main.module.css";
import Post from "./Posts/Post/Post";

const Main =  () => {
    return (
        <div className={classes.main}>
            <img src="https://i.pinimg.com/originals/70/bc/be/70bcbe9be53e7f1a505000827f383914.jpg" alt="BG"/>
            <Post />
            <Post />
            <Post />
            <Post />
        </div>
    );
};

export default Main;