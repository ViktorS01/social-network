import React from "react";
import classes from './messageSomebodyComponent.module.css';
import ava from "../../../../img/avatar-2.jpg";

export const MessageSomebodyComponent = (props) => {

    return (
        <>
                <div className={classes.revertMessageBlock}>
                    <img src={ava} alt="ava"/>
                    <div className={classes.messageYou}>
                        <p className={classes.messageContent}>{props.message}</p>
                    </div>
                </div>
        </>
    )
};