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
import Register from "./layouts/register";
import UsersLoader from "./components/ui/hoc/usersLoader";

const App = () => {
    return (
        <div className="bg-light">
            <AppLoader>
                <UsersLoader>
                    <NavBar />
                    <Breadcrumb />
                    <Switch>
                        <Route path="/bookmarks" exact component={Bookmarks} />
                        <Route path="/register" exact component={Register} />
                        <Route path="/" exact component={Main} />
                        <Route path="/:userId?" exact component={User} />
                        <Redirect to="/" />
                    </Switch>
                    <Footer />
                </UsersLoader>
            </AppLoader>
            <ToastContainer />
        </div>
    );
};

export default App;
