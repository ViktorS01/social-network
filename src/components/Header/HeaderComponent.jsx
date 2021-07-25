import React from "react";
import classes from "./Header.module.css";
import logo from './../../img/svg1.png';
import bell from './../../img/svg8.png';
import sms from './../../img/svg9.png';
import user from './../../img/avatar-2.jpg';
import {Button} from "@material-ui/core";

export const HeaderComponent = () => {
    return (
        <header className={classes.header}>
            <div className={classes.logoBar}>
                <img src="http://demo.foxthemes.net/instellohtml/assets/images/logo.png" alt="Logo" />
            </div>
            <div className={classes.topNavPanel}>
                <img src={logo} alt="logo"/>
                <input type="text" placeholder="Search..."/>
                <div className={classes.topNavPanel_left}>
                    <Button variant="contained" color="secondary" className={classes.button}>Upload</Button>
                    <img src={bell} alt="bell"/>
                    <img src={sms} alt="bell"/>
                    <img src={user} alt="sas" className={classes.userPhoto}/>
                </div>
            </div>
        </header>
    );
};
