import React from "react";
import classes from './sendMessage.module.css';
import {Button} from "@material-ui/core";

export const SendMessage = (props) => {

    const addMessage = () => {
        debugger;
        const text = newMessageElem.current.value;
        props.addMessage(text);
        newMessageElem.current.value = "";
    }

    let newMessageElem = React.createRef();

    return (
        <>
            <div className={classes.sendMessageBlock}>
                <input className={classes.sendMessageBlock__input}
                       type="text"
                       placeholder="Your Message.."
                       ref={newMessageElem}
                />
                <Button className={classes.sendMessageBlock__button}
                        variant="contained"
                        color="primary"
                        onClick={addMessage}
                >Send</Button>
            </div>
        </>
    )
};