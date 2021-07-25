import React from "react";
import classes from './Nav.module.css';
import {NavLink} from "react-router-dom";
import user from '../../../img/avatar-2.jpg';

export const NavComponent = () => {
    return (
        <nav className={classes.nav}>
            <div className={classes.userBlock}>
                <div className="userAvatar">
                    <img src={user} alt="user" className={classes.userAva}/>
                </div>
                <div className={classes.userName}>
                    <p>Виктор Степанов</p>
                </div>
                <div className={classes.userInfo}>
                    <div className={classes.userInfo_block}>
                        <p>Post</p>
                        <p>324</p>
                    </div>
                    <div className={classes.userInfo_block}>
                        <p>Following</p>
                        <p>323</p>
                    </div>
                    <div className={classes.userInfo_block}>
                        <p>Followers</p>
                        <p>34</p>
                    </div>
                </div>
            </div>
            <div className={classes.linksBar}>
                <NavLink to="/profile" activeClassName={classes.activeLink}
                         className={classes.link}>
                    Profile
                </NavLink>
                <NavLink to="/messages" activeClassName={classes.activeLink}
                         className={classes.link}>
                    Messages
                </NavLink>
                <NavLink to="/news" activeClassName={classes.activeLink}
                         className={classes.link}>
                    News
                </NavLink>
                <NavLink to="/music" activeClassName={classes.activeLink}
                         className={classes.link}>
                    Music
                    </NavLink>
                <NavLink to="/settings" activeClassName={classes.activeLink}
                         className={classes.link}>
                    Settings
                </NavLink>
            </div>

        </nav>
    );
};

