import React from "react";
import classes from './music.module.css';
import {HeaderComponent} from "../../components/Header/HeaderComponent";
import {NavComponent} from "../../components/Nav/NavComponent";
import {MusicComponent} from "../../components/Music/MusicComponent";

export const Music = () => {
    return (
        <>
            <HeaderComponent/>
            <div className={classes.main}>
                <NavComponent/>
                <MusicComponent/>
            </div>
        </>
    );
};