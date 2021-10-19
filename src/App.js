import React, { Component } from "react";
import Header from "./components/Header";
import Footer from "./components/FooterComponent";
import Directory from "./components/DirectoryComponent";
import NewRecipient from "./components/AddressesComponent";
import { CARDS } from "./shared/cards";
import { PEOPLE } from "./shared/recipients";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import ChooseFile from "./components/ChooseFileComponent";

class App extends Component {
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
      <BrowserRouter>
        <div className="App">
          <Header />
          <ChooseFile border={this.state.border} />
          <Directory action={this.handler} cards={this.state.cards} />
          <NewRecipient />
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
