import React from "react";
import {CardMessage} from "./CardMessage/CardMessage";
import classes from "./CardMessage/cardMessage.module.css";

export const CardsMessage = (props) => {

    return (
        <>
            <div className={classes.dialogsBlock__dialogs}>
                {props.users.map(elem => {
                    return <CardMessage name={elem.name} key={elem.id}/>;
                })}
            </div>
        </>
    )
}
