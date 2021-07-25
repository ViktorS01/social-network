import React from "react";
import classes from './sendMessage.module.css';
import {Button} from "@material-ui/core";

export const SendMessage = () => {
    return (
        <>
            <div className={classes.sendMessageBlock}>
                <input className={classes.sendMessageBlock__input} type="text" placeholder="Your Message.."/>
                <Button className={classes.sendMessageBlock__button} variant="contained" color="primary">Send</Button>
            </div>
        </>
    )
};