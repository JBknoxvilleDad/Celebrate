import React, { Component, useState, useRef } from "react";
import Header from "./components/Header";
import Directory from "./components/DirectoryComponent";
import { CARDS } from "./shared/cards";
import {
  Button,
  Card,
  CardImg,
  CardImgOverlay,
  CardText,
  CardBody,
  CardTitle,
} from "reactstrap";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import ChooseFile from "./components/ChooseFileComponent";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: CARDS,
      file: null,
    };
  }

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Header />
          <Directory cards={this.state.cards} />
          <ChooseFile />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
