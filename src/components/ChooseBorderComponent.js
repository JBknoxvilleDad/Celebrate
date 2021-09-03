import React, { Component } from "react";
import Select from "react-select";

const options = [
  { id: 0, value: "Borders", label: "Choose a Border" },
  {
    id: 1,
    value: "assets/overlays/xmasborder4.png",
    label: "Christmas",
  },
];

class ChooseBorder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedBorder: null,
    };
    this.handleBorderChange = this.handleBorderChange.bind(this);
  }
  handleBorderChange = (selectedBorder) => {
    this.setState({ selectedBorder });
    console.log(`Option selected:`, selectedBorder);
  };
  render() {
    const { selectedBorder } = this.state;
    return(
    <Select
      value={selectedBorder}
      options={options}
      onChange={this.handleBorderChange}
    />
    );
  }
}

export default ChooseBorder;
