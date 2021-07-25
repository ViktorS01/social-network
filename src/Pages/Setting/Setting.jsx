import React from "react";
import classes from './setting.module.css';
import {HeaderComponent} from "../../components/Header/HeaderComponent";
import {NavComponent} from "../../components/Nav/NavComponent";
import {SettingsComponent} from "../../components/Settings/SettingsComponent";

export const Setting = () => {
    return (
        <>
            <HeaderComponent/>
            <div className={classes.main}>
                <NavComponent/>
                <SettingsComponent/>
            </div>
        </>
    );
};