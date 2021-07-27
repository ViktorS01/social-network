import React from "react";
import classes from './messageInfo.module.css';
import {MessageComponent} from "./MessageMeComponent/MessageComponent";
import {MessageSomebodyComponent} from "./MessageSomebodyComponent/MessageSomebodyComponent";

export const MessageInfo = () => {

    const messagges = [
        {id: 1, message:"Дарова. Как сам?" , status: 0}, //me
        {id: 2, message:"Дарова. Отлично!" , status: 1}, //somebody
        {id: 3, message: "У тебя то как дела?", status: 1}
    ]
    return (
        <>
            <div className={classes.dialogsBlock__messages}>
                {messagges.map(elem => {
                    if (elem.status === 0){
                        return <MessageComponent message={elem.message}/>
                    } else {
                        return <MessageSomebodyComponent message={elem.message}/>
                    }
                })}
            </div>
        </>
    )
}