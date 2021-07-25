import React from "react";
import classes from './searchBlock.module.css';
import logo from '../../../img/svg1.png';

export const SearchBlock = () => {
    return (
        <>
            <div className={classes.dialogsBlock__search}>
                <div className={classes.inputBlock}>
                    <input type="text" placeholder="Search"/>
                    <img src={logo} alt="logo"/>
                </div>
            </div>
        </>
    )
};