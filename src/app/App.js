import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Main from "./layouts/main";
import NavBar from "./components/ui/navBar";
import User from "./layouts/user";
import Bookmarks from "./layouts/bookmarks";
import AppLoader from "./components/ui/hoc/appLoader";

const App = () => {
    return (
        <div>
            <AppLoader>
                <NavBar />
                <Switch>
                    {/* <Route path="/users/:userId?/" component={Users} /> */}
                    <Route path="/bookmarks" exact component={Bookmarks} />
                    <Route path="/users/:userId?/" exact component={User} />
                    <Route path="/" exact component={Main} />
                    <Redirect to="/" />
                </Switch>
            </AppLoader>
            <ToastContainer />
        </div>
    );
};

export default App;
