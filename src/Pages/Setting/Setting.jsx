import React from "react";
import classes from './setting.module.css';
import {HeaderComponent} from "../../components/Header/HeaderComponent";
import {NavComponent} from "../../components/Nav/NavComponent";
import {SettingsComponent} from "../../components/Settings/SettingsComponent";

export const Setting = () => {
    return (
        <>
            <div className="app-wrapper">
                <HeaderComponent/>
                <NavComponent/>
                <div className="app-wrapper-content">
                    <SettingsComponent />
                </div>
            </div>
        </>
    );
};