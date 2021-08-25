import React, { Component, useState, useRef } from "react";
import {
  Button,
  Card,
  CardImg,
  CardImgOverlay,
  CardText,
  CardBody,
  CardTitle,
} from "reactstrap";

class ChooseFile extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
      <div className="container">
        <div className="row">
          <FileInputWithButton />
          <div className="container">
            <div className="row">
              <div className="col-md-3"></div>
              <div className="col-md-5 m-1 align-item-center">
                <Card body inverse color="primary">
                  <div className="parent">
                    <img
                      className="image2"
                      src={this.state.file}
                      width="100%"
                    />
                    <img
                      className="image1"
                      width="100%"
                      src="assets/overlays/xmasborder4.png"
                    />
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ChooseFile;
