import React, { Component } from "react";
import { Navbar, NavbarBrand } from "reactstrap";
import Directory from "./components/DirectoryComponent";
import { CARDS } from "./shared/cards";
import {
  Card,
  CardImg,
  CardImgOverlay,
  CardText,
  CardBody,
  CardTitle,
} from "reactstrap";
import "./App.css";
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
    return (
      <div className="App">
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">Celebration</NavbarBrand>
          </div>
        </Navbar>
        <Directory cards={this.state.cards} />
        <input type="file" onChange={this.handleChange} />
        <div className="conatiner">
          <div className="row">
            <div className="col-md-3"></div>
            <div className="col-md-5 m-1 align-item-center">
              <Card>
                <CardImg width="100%" src={this.state.file} />
                <CardImgOverlay></CardImgOverlay>
              </Card>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
