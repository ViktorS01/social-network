import React from "react";
import {Route, Switch} from 'react-router-dom'
import {Messages} from "../Pages/Messages/Messages";
import {Profile} from "../components/Main/Profile";
import {Setting} from "../Pages/Setting/Setting";
import {News} from "../Pages/News/News";
import {Music} from "../Pages/Music/Music";

export const Routes = () => {
    return (
        <>
            <Switch>
                <Route path="/messages" component={Messages}/>
                <Route path="/profile" component={Profile}/>
                <Route path="/settings" component={Setting}/>
                <Route path="/news" component={News}/>
                <Route path="/music" component={Music}/>
            </Switch>
        </>
    )
}