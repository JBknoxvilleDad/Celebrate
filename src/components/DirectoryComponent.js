import React, { Component } from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardGroup,
  Button,
} from "reactstrap";
class Directory extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const directory = this.props.cards.map((card) => {
      return (
        <div key={card.id}>
          <CardGroup>
            <Card body inverse color="primary">
              <CardImg top width="100%" src={card.image} alt={card.name} />
              <CardBody>
                <CardTitle tag="h5">{card.name}</CardTitle>
                <CardText>{card.description}</CardText>
                <Button
                  color="secondary"
                  block
                  onClick={() => this.props.action(card)}
                >
                  Pick Me!
                </Button>
              </CardBody>
            </Card>
          </CardGroup>
        </div>
      );
    });

    return (
      <div className="container-fluid">
        <b>Step 1</b>
        <div className="row ml-5">{directory}</div>
      </div>
    );
  }
}
export default Directory;
