import React from "react";
import {Routes} from "./routes";

export function App(props) {
    return <Routes messages={props.state.messagesPage.messages}
                   users={props.state.messagesPage.users}
                   addMessage={props.addMessage}/>;
}
