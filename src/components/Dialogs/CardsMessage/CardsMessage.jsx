import React from "react";
import {CardMessage} from "./CardMessage/CardMessage";
import classes from "./CardMessage/cardMessage.module.css";

export const CardsMessage = () => {

    const users = [
        {id: 1, name: "Сергей Семенов"},
        {id: 2, name: "Иван Дремин"},
        {id: 3, name: "Степан Разин"},
        {id: 4, name: "Иван Грозный"}
    ];


    return (
        <>
            <div className={classes.dialogsBlock__dialogs}>
                {users.map(elem => {
                    console.log(1);
                    return <CardMessage name={elem.name} key={elem.id}/>;
                })}
            </div>
        </>
    )
}
