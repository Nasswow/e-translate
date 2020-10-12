import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "react-redux";
import { Container } from "reactstrap";
import store from "./store";
import "./App.css";
import AppNavbar from "./components/AppNavbar";
import WordsList from "./components/WordsList";
import WordModal from "./components/WordModal";
import Login from "./components/Login";
import { loadUser } from "./actions/authActions";

export default class App extends Component {
  componentDidMount() {
    store.dispatch(loadUser());
  }
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <AppNavbar />
          <Container>
            {/* <Login /> */}
            <WordModal />
            <WordsList />
          </Container>
        </div>
      </Provider>
    );
  }
}
