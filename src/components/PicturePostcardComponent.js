import React, { Component } from "react";
import Directory from "./DirectoryComponent";
import NewRecipient from "./AddressesComponent";
import { CARDS } from "../shared/cards";
import { PEOPLE } from "../shared/recipients";
import ChooseFile from "./ChooseFileComponent";

class PicturePostcard extends Component {
  constructor(props) {
    super(props);
    this.handler = this.handler.bind(this);
    this.state = {
      cards: CARDS,
      file: null,
      border: null,
      people: PEOPLE,
    };
  }

  handler(card) {
    this.setState({
      border: card.border,
    });
  }
  render() {
    return (
      <div>
        <ChooseFile border={this.state.border} />
        <Directory action={this.handler} cards={this.state.cards} />
        <NewRecipient />
      </div>
    );
  }
}
export default PicturePostcard;
