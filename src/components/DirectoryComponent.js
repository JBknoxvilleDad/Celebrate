import React, { Component } from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardGroup,
  Button,
  Container,
} from "reactstrap";

class Directory extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.props.onchange({ border: this.card.border });
  }
  render() {
    const directory = this.props.cards.map((card) => {
      return (
        <CardGroup className="wide-group">
          <Card body inverse color="primary">
            <CardImg top width="100%" src={card.image} alt={card.name} />
            <CardBody>
              <CardTitle tag="h5">{card.name}</CardTitle>
              <CardText>{card.description}</CardText>
              <Button color="secondary" block onclick={this.handleClick}>
                Pick Me!
              </Button>
            </CardBody>
          </Card>
        </CardGroup>
      );
    });

    return (
      <div className="container">
        <div className="row">{directory}</div>
      </div>
    );
  }
}
export default Directory;
