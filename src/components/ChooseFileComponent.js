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
import AvatarEditor from "react-avatar-editor";
import Select from "react-select";

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
    const options = [
      { value: "Borders", label: "Choose a Border" },
      { value: "assets/overlays/xmasborder4.png", label: "Christmas" },
    ];

    const FileInputWithButton = () => {
      const fileInput = useRef(null);
      return (
        <div className="container">
          <div className="row">
            <hr />
          </div>
          <div className="row">
            <input
              type="file"
              ref={fileInput}
              style={{ display: "none" }}
              onChange={this.handleChange}
            />
          </div>
          <div className="col-md-4">
            <Button
              size="lg"
              color="success"
              onClick={() => fileInput.current.click()}
            >
              ** Choose Picture for Postcard **
            </Button>
            <Select defaultValue={options[0]} options={options} />
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
                <Card className="inputCard" body inverse color="primary">
                  <div
                    className="parent"
                    style={{
                      height: "350px",
                      width: "350px",
                    }}
                  >
                    <AvatarEditor
                      image={this.state.file}
                      width={250}
                      height={250}
                      border={50}
                      scale={1}
                      rotate={0}
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
