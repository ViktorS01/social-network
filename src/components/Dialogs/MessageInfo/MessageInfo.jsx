import React from "react";
import classes from './messageInfo.module.css';
import {MessageComponent} from "./MessageMeComponent/MessageComponent";
import {MessageSomebodyComponent} from "./MessageSomebodyComponent/MessageSomebodyComponent";

export const MessageInfo = (props) => {

    return (
        <>
            <div className={classes.dialogsBlock__messages}>
                {props.messages.map(elem => {
                    if (elem.status === 0){
                        return <MessageComponent message={elem.message} />
                    } else {
                        return <MessageSomebodyComponent message={elem.message}/>
                    }
                })}
            </div>
        </>
    )
}