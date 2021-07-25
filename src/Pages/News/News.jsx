import React from "react";
import classes from './news.module.css';
import {HeaderComponent} from "../../components/Header/HeaderComponent";
import {NavComponent} from "../../components/Nav/NavComponent";
import {NewsComponent} from "../../components/News/NewsComponent";

export const News = () => {
    return (
        <>
            <HeaderComponent/>
            <div className={classes.main}>
                <NavComponent/>
                <NewsComponent/>
            </div>
        </>
    );
};