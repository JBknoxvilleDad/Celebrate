import React, { Component } from "react";
import { Form, Col, Row, Label, Button } from "reactstrap";

const addressesArray = [];
class NewRecipient extends Component {
  constructor() {
    super();

    this.state = {
      contacts: addressesArray,
    };
    this.baseState = this.state;
    this.sentCards = this.sentCards.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  resetForm = () => {
    this.setState(this.baseState);
    this.sentCards();
  };

  sentCards() {
    alert("Cards are being sent!");
  }

  handleSubmit(e) {
    e.preventDefault();
    const { contacts } = this.state,
      firstName = this.refs.firstName.value,
      lastName = this.refs.lastName.value,
      address = this.refs.address.value,
      city = this.refs.city.value,
      state = this.refs.state.value,
      zipCode = this.refs.zipCode.value;
    this.setState(
      {
        contacts: [
          ...contacts,
          {
            firstName,
            lastName,
            address,
            city,
            state,
            zipCode,
          },
        ],
      },
      () => {
        this.refs.firstName.value = "";
        this.refs.lastName.value = "";
        this.refs.address.value = "";
        this.refs.city.value = "";
        this.refs.state.value = "";
        this.refs.zipCode.value = "";
      }
    );
  }

  render() {
    const { contacts } = this.state;
    console.log("message", this.state.contacts);

    return (
      <div className="container-fluid">
        <b>Step 3</b>
        <div className="row ml-3">
          <div className="col-sm-4">
            <h2>Add a Recipient</h2>
          </div>
          <div className="col-sm-4">
            <h2>People That Deserve Postcards</h2>
          </div>
          <div className="col-sm-4">
            <h2>Send Some Love Their Way!</h2>
          </div>
        </div>
        <div className="row ml-3">
          <div className="col-sm-5">
            <Form onSubmit={this.handleSubmit}>
              <Row className="form-group">
                <Label md={2}> First Name: </Label>
                <Col md={10}>
                  <input type="text" name="firstName" ref="firstName" />
                </Col>
              </Row>
              <Row className="form-group">
                <Label md={2}>Last Name: </Label>
                <Col md={10}>
                  <input type="text" name="lastName" ref="lastName" />
                </Col>
              </Row>
              <Row className="form-group">
                <Label md={2}>Address: </Label>
                <Col md={10}>
                  <input type="text" name="address" ref="address" />
                </Col>
              </Row>
              <Row className="form-group">
                <Label md={2}>City: </Label>
                <Col md={10}>
                  <input type="text" name="city" ref="city" />
                </Col>
              </Row>
              <Row className="form-group">
                <Label md={2}>State: </Label>
                <Col md={10}>
                  <input type="text" name="State" ref="state" />
                </Col>
              </Row>
              <Row className="form-group">
                <Label md={2}>Zip Code: </Label>
                <Col md={10}>
                  <input type="text" name="zipCode" ref="zipCode" />
                </Col>
              </Row>
              <Button type="submit" color="success">
                Add Lucky Person
              </Button>
            </Form>
          </div>
          <div className="col-sm-3">
            <ul className="list">
              {contacts.map((contact) => (
                <li>
                  {` ${contact.firstName} ${contact.lastName}`}
                  <br />
                  {` ${contact.address}`}
                  <br />
                  {` ${contact.city} ${contact.state} ${contact.zipCode}`}
                </li>
              ))}
            </ul>
          </div>
          <div className="col-sm-4 mt-5">
            <Button onClick={this.resetForm} color="success">
              Send those cards!!
            </Button>
          </div>
        </div>
      </div>
    );
  }
}
export default NewRecipient;
