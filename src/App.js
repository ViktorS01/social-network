import React from "react";
import './App.css';
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Main from "./components/Main/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
// import Dialogs from "./components/Dialogs/Dialogs";

const App = () => {
    return (
        <div className="app-wrapper">
            <Header/>
            <Nav/>
            <div className="app-wrapper-content">
                <Dialogs/>
                <Main/>
            </div>
        </div>
    );
};

export default App;
