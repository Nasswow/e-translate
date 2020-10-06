import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import { Provider } from "react-redux";
import { Container } from "reactstrap";
import store from "./store";
import "./App.css";
import AppNavbar from "./components/AppNavbar";
import WordsList from "./components/WordsList";
import WordModal from "./components/WordModal";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <AppNavbar />
        <Container>
          <WordModal />
          <WordsList />
        </Container>
      </div>
    </Provider>
  );
}

export default App;
