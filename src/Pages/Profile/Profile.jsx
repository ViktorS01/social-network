import React from "react";
import classes from './profile.module.css';
import {ProfileInfo} from "../../components/Main/ProfileInfo/ProfileInfo";
import {MyPosts} from "../../components/Main/Posts/MyPosts";
import {HeaderComponent} from "../../components/Navigation/Header/HeaderComponent";
import {NavComponent} from "../../components/Navigation/Nav/NavComponent";

export const Profile = () => {
    return (
        <>
            <HeaderComponent/>
            <div className={classes.main}>
                <NavComponent />
                <ProfileInfo />
                <MyPosts />
            </div>
        </>
    );
};