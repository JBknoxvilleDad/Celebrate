import React, { Component } from "react";
import { Container, Row, Col, Button } from "reactstrap";
import PostcardExamples from "./CarouselComponent";
import { Link } from "react-router-dom";

function Home(props) {
  return (
    <Container>
      <Row>
        <c>Welcome to Postcards In Real Life!!!</c>

        <Col md="8">
          <PostcardExamples />
        </Col>
        <Col>
          <h3>Send them something they can't get on their phone!</h3>
          <br />
          <h5>
            "My friends were so surprised, they actually started inviting my out
            again!!!" -- Erika 28
          </h5>
          <br />
          <h5>
            "I thought my mom was going to cry, I guess she thought I took the
            time to go to the store and like make this for her." -- Chad 23
          </h5>
          <br />
          <h5>
            "I got one from my ex-college roommate, and then I had to send one
            to my other ex-college roommate." -- Elizabeth 26
          </h5>
        </Col>
      </Row>
      <Row>
        <Col className="mt-3" sm="12">
          <h1>What would you like to send?</h1>
        </Col>
        <Col className="m-4">
          <Link to="/postcard">
            <Button color="primary" block>
              Postcards without Pictures?{" "}
            </Button>
          </Link>
          <Link to="/picturepostcard">
            <Button color="secondary" block>
              Postcards with Pictures?{" "}
            </Button>
          </Link>
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
