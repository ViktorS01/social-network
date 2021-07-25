import React from "react";
import {MyPosts} from "./Posts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {HeaderComponent} from "../Header/HeaderComponent";
import {NavComponent} from "../Nav/NavComponent";

export const Profile = () => {
    return (
        <div className="app-wrapper">
            <HeaderComponent/>
            <NavComponent/>
            <div className="app-wrapper-content">
                <div>
                    <ProfileInfo/>;
                    <MyPosts/>;
                </div>
            </div>
        </div>
    );
};