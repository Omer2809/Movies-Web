import React, { Component } from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Home from "./components/home";
import Movie from "./components/movie";
import WatchList from "./components/watchList";
import NotFound from "./components/notFound";
import NavBar from "./components/navBar";
import LoginForm from "./components/loginForm";
import RegisterForm from "./components/registerForm";
import Logout from "./components/logout";
import ProtectedRoute from "./components/common/protectedRoute";
import auth from "./services/authService";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import { GlobalStyle } from "./components/mystyle/Global";
import Footer from "./components/footerr";
import ScrollToTop from "./components/ScrollToTop";
// import Tippy from '@tippy.js/react';
import 'tippy.js/dist/tippy.css';


class App extends Component {
  state = {};

  componentDidMount() {
    const user = auth.getCurrentUser();
    this.setState({ user });
  }

  render() {
    const { user } = this.state;

    return (
      <>
        <ToastContainer />
        <ScrollToTop />
        <NavBar user={user} />
        <Switch>
          <Route path="/register" component={RegisterForm} />
          <Route path="/login" component={LoginForm} />
          <Route path="/logout" component={Logout} />
          <ProtectedRoute path="/watch-list" component={WatchList} />
          <Route path="/not-found" component={NotFound} />
          <Route path="/movies/:id" component={Movie} />
          <Route path="/" exact component={Home} />
          <Redirect to="/not-found" />
        </Switch>
        <Footer user={user} />
        <GlobalStyle />
      </>
    );
  }
}

export default App;
