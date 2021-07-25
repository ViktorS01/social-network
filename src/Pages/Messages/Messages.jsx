import React from "react";
import classes from './messages.module.css';
import {HeaderComponent} from "../../components/Header/HeaderComponent";
import {NavComponent} from "../../components/Nav/NavComponent";
import {DialogComponent} from "../../components/Dialogs/DialogComponent";

export const Messages = () => {
    return (
        <>
            <HeaderComponent/>
            <div className={classes.main}>
                <NavComponent/>
                <DialogComponent/>
            </div>
        </>
    );
};