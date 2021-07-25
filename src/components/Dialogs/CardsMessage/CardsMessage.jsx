import React from "react";
import classes from './cardMessage.module.css';
import ava from "../../../img/avatar-2.jpg";

export const CardsMessage = () => {
    return (
        <>
            <div className={classes.dialogsBlock__dialogs}>
                <div className={classes.dialogs__blockMessage}>
                    <img src={ava} alt="ava" className={classes.dialog_block_ava}/>
                    <div className={classes.blockMessage__info}>
                        <p className={classes.blockMessage__info__name}>Сергей Семенов</p>
                        <p className={classes.blockMessage__info__lastMess}>Дарова, как сам?</p>
                    </div>
                </div>
            </div>
        </>
    )
};