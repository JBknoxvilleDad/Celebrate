import React, { Component } from "react";
import Header from "./Header";
import Home from "./HomeComponent";
import Footer from "./FooterComponent";
import Directory from "./DirectoryComponent";
import About from "./AboutUsComponent";
import Contact from "./ContactUsComponent";

import NewRecipient from "./AddressesComponent";
import { CARDS } from "../shared/cards";
import { PEOPLE } from "../shared/recipients";
import { Switch, Route, Redirect } from "react-router-dom";
import PicturePostcard from "./PicturePostcardComponent";
import NoPicPostcard from "./NoPicPostcardComponent";

class Main extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const HomePage = () => {
      return <Home />;
    };

    return (
      <div>
        <Header />
        <Switch>
          <Route path="/home" component={HomePage} />
          <Route path="/picturepostcard" render={() => <PicturePostcard />} />
          <Route path="/nopicpostcard" render={() => <NoPicPostcard />} />
          <Route
            exact
            path="/directory"
            render={() => (
              <Directory action={this.handler} cards={this.state.cards} />
            )}
          />
          <Route exact path="/contactus" render={() => <Contact />} />
          <Route path="/aboutus" render={() => <About />} />
          <Redirect to="/home" />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default Main;
