import React from "react";
import {Route, Switch} from 'react-router-dom'
import {Messages} from "../Pages/Messages/Messages";
import {Profile} from "../Pages/Profile/Profile";
import {Setting} from "../Pages/Setting/Setting";
import {News} from "../Pages/News/News";
import {Music} from "../Pages/Music/Music";

export const Routes = (props) => {

    return (
        <>
            <Switch>
                <Route path="/messages" render={() => <Messages messages={props.messages}
                                                                users={props.users}
                                                                addMessage={props.addMessage}/>}/>
                <Route path="/" component={Profile}/>
                <Route path="/settings" component={Setting}/>
                <Route path="/news" component={News}/>
                <Route path="/music" component={Music}/>
            </Switch>
        </>
    )
}