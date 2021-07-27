import React from "react";
import classes from './messageComponent.module.css';
import ava from "../../../../img/avatar-2.jpg";

export const MessageComponent = (props) => {

    return (
        <>
                <div className={classes.messageBlock}>
                    <div className={classes.messageMe}>
                        <p className={classes.messageContent}>{props.message}</p>
                    </div>
                    <img src={ava} alt="ava"/>
                </div>
        </>
    )
};