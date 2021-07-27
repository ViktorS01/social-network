import React from "react";
import classes from './cardMessage.module.css';
import ava from "./../../../../img/avatar-2.jpg";

export const CardMessage = (props) => {

    return (
        <>
            <div className={classes.dialogs__blockMessage}>
                <img src={ava} alt="ava" className={classes.dialog_block_ava}/>
                <div className={classes.blockMessage__info}>
                    <p className={classes.blockMessage__info__name}>{props.name}</p>
                    <p className={classes.blockMessage__info__lastMess}>...</p>
                </div>
            </div>
        </>
    )
};