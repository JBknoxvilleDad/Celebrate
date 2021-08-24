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

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: CARDS,
      file: null,
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({
      file: URL.createObjectURL(event.target.files[0]),
    });
  }
  render() {
    const FileInputWithButton = () => {
      const fileInput = useRef(null);
      return (
        <div className="container">
          <div className="row">
            <hr />
          </div>
          <div className="row">
            <div className="col-md-3">
              <input
                type="file"
                ref={fileInput}
                style={{ display: "none" }}
                onChange={this.handleChange}
              />
            </div>
            <div>
              <Button
                size="lg"
                color="success"
                onClick={() => fileInput.current.click()}
              >
                Choose File
              </Button>
            </div>
          </div>
        </div>
      );
    };
    return (
      <BrowserRouter>
        <div className="App">
          <Header />
          <Directory cards={this.state.cards} />
          <FileInputWithButton />
          <div className="container">
            <div className="row">
              <div className="col-md-3"></div>
              <div className="col-md-5 m-1 align-item-center">
                <Card>
                  <CardImg width="100%" src={this.state.file} />

                  <CardImgOverlay>
                    <CardImg
                      width="100%"
                      src="assets/overlays/xmasborder4.png"
                    />
                  </CardImgOverlay>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
