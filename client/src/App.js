import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "react-redux";
import { Container } from "reactstrap";
import store from "./store";
import "./App.css";
import AppNavbar from "./components/AppNavbar";
import WordsList from "./components/WordsList";
import WordModal from "./components/WordModal";
import Footer from "./components/Footer";

import Login from "./components/Login";
import { loadUser } from "./actions/authActions";

export default class App extends Component {
  componentDidMount() {
    store.dispatch(loadUser());
  }
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <AppNavbar />
            <Container className="mx-auto w-75 text-xl-center">
              <WordModal />
              <WordsList />
            </Container>
            <Footer />
          </div>
        </Router>
      </Provider>
    );
  }
}
