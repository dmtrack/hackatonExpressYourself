import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Main from "./layouts/main";
import NavBar from "./components/ui/navBar";
import User from "./layouts/user";
import Bookmarks from "./layouts/bookmarks";
import AppLoader from "./components/ui/hoc/appLoader";
import Breadcrumb from "./components/ui/breadcrumb";
import Footer from "./components/ui/footer";

const App = () => {
    return (
        <div className="bg-warning">
            <AppLoader>
                <NavBar />
                <Breadcrumb />
                <Switch>
                    {/* <Route path="/users/:userId?/" component={Users} /> */}
                    <Route path="/bookmarks" exact component={Bookmarks} />
                    <Route path="/users/:userId?/" exact component={User} />
                    <Route path="/" exact component={Main} />
                    <Redirect to="/" />
                </Switch>
                <Footer />
            </AppLoader>
            <ToastContainer />
        </div>
    );
};

export default App;
