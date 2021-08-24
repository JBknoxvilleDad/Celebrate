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
        <div>
          <input
            type="file"
            ref={fileInput}
            style={{ display: "none" }}
            onChange={this.handleChange}
          />
          <Button
            className="upload-btn"
            onClick={() => fileInput.current.click()}
          >
            Choose File
          </Button>
        </div>
      );
    };
    return (
      <div className="container">
        <div className="row">{FileInputWithButton}</div>
      </div>
    );
  }
}

export default ChooseFile;
