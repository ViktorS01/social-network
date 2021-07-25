import React from "react";
import classes from './messageInfo.module.css';
import ava from "../../../img/avatar-2.jpg";

export const MessageInfo = () => {
    return (
        <>
            <div className={classes.dialogsBlock__messages}>
                <div className={classes.messageBlock}>
                    <div className={classes.messageMe}>
                        <p className={classes.messageContent}>Знаешь кто самая красивая девушка в мире? </p>
                    </div>
                    <img src={ava} alt="ava"/>
                </div>
                <div className={classes.revertMessageBlock}>
                    <img src={ava} alt="ava"/>
                    <div className={classes.messageYou}>
                        <p className={classes.messageContent}>Ты че ? Все знают, что Анечка Тихонюк! </p>
                    </div>
                </div>
            </div>
        </>
    )
};