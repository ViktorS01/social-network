import React from "react";
import classes from './Dialogs.module.css';
import {SearchBlock} from "./SearchBlock/SearchBlock";
import {StatusBlock} from "./StatusBlock/StatusBlock";
import {CardsMessage} from "./CardsMessage/CardsMessage";
import {MessageInfo} from "./MessageInfo/MessageInfo";
import {SendMessage} from "./SendMessage/SendMessage";

export const DialogComponent = () => {
    return (
        <div className={classes.main}>
            <p className={classes.dialogsTitle}>Messages</p>
            <div className={classes.dialogsBlock}>
                <SearchBlock/>
                <StatusBlock/>
                <CardsMessage/>
                <MessageInfo/>
                <SendMessage />
            </div>
        </div>
    )
};