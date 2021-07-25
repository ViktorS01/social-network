import React from "react";
import classes from './statusBlock.module.css';
import ava from "../../../img/avatar-2.jpg";

export const StatusBlock = () => {
    return (
        <>
            <div className={classes.dialogsBlock__info}>
                <div className={classes.dialogsBlock__info__statusBar}>
                    <img src={ava} alt="ava"/>
                    <div className={classes.statusBar_info}>
                        <p>Степан Гордеев</p>
                        <p>Онлайн</p>
                    </div>
                </div>
                <div className={classes.deleteConversation}>
                    Delete Conversation
                </div>
            </div>
        </>
    )
};