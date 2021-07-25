import React from "react";
import classes from './news.module.css';
import {HeaderComponent} from "../../components/Header/HeaderComponent";
import {NavComponent} from "../../components/Nav/NavComponent";
import {NewsComponent} from "../../components/News/NewsComponent";

export const News = () => {
    return (
        <>
            <div className="app-wrapper">
                <HeaderComponent/>
                <NavComponent/>
                <div className="app-wrapper-content">
                    <NewsComponent/>
                </div>
            </div>
        </>
    );
};