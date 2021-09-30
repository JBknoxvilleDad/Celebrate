import React, { Component, useRef } from "react";
import { Button, Card, CardImg } from "reactstrap";
import ReactAvatarEditor from "react-avatar-editor";

class ChooseFile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      file: null,
      image: "avatar.jpg",
      allowZoomOut: false,
      position: { x: 0, y: 0 },
      scale: 1,
      rotate: 0,
      borderRadius: 0,
      preview: null,
      width: 350,
      height: 200,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      file: URL.createObjectURL(event.target.files[0]),
    });
  }
  handleNewImage = (e) => {
    this.setState({ image: e.target.files[0] });
  };

  handleScale = (e) => {
    const scale = parseFloat(e.target.value);
    this.setState({ scale });
  };

  handlePositionChange = (position) => {
    this.setState({ position });
  };

  render() {
    const FileInputWithButton = () => {
      const fileInput = useRef(null);
      const border = this.props.border;
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
          </div>
        </div>
      );
    };
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-2">
            <b>Step 2</b>
          </div>
          <div className="col-md-8">
            <FileInputWithButton />
          </div>
          <div className="container">
            <div className="row">
              <div className="col-md-3"></div>
              <div className="col-md-5 m-1 align-item-center">
                <Card className="inputCard" body inverse color="primary">
                  <ReactAvatarEditor
                    scale={parseFloat(this.state.scale)}
                    width={this.state.width}
                    height={this.state.height}
                    position={this.state.position}
                    onPositionChange={this.handlePositionChange}
                    rotate={parseFloat(this.state.rotate)}
                    borderRadius={
                      this.state.width / (100 / this.state.borderRadius)
                    }
                    image={this.state.file}
                    className="editor-canvas"
                  />
                  <img src={this.props.border} className="clsFirstImg" />
                </Card>
                Zoom:
                <input
                  name="scale"
                  type="range"
                  onChange={this.handleScale}
                  min={this.state.allowZoomOut ? "0.1" : "1"}
                  max="2"
                  step="0.01"
                  defaultValue="1"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ChooseFile;
