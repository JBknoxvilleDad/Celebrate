import React, { Component } from "react";
import { Row, Col, Container } from "reactstrap";

class About extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Container>
          <Row>
            <Col md="12">
              <h1>About us</h1>
              <p>
                We, at Postcards IRL fully believe that the world has lost the
                value of physical communication. We built this website so that
                even if we are in a pandameic and are unable to hug each other,
                then at least a card can be sent. Just think about it, how nice
                is it to go to the mailbox and get something other than a bill
                to bring back into the house?
              </p>
            </Col>
            <Col md="5">
              <img src="../assets/images/me.jpg" />
              <d style={{ margin: 40 }}>
                I have been married for nearly 15 years and have three beautiful
                children, we are now living in Knoxville, TN, but originally are
                from Las Vegas, NV. I moved to TN to transfer with my employer,
                but that was not to be. After we parted ways Covid hit and I am
                now spending my nights working at Pepsi making soda, and my days
                driving food orders for BiteSquad.
                <br />
                Over the past six months I have taken Udemy courses and just
                completed a coding bootcamp at NuCamp for web development and am
                super excited about starting a new career. Hence this website.
              </d>
            </Col>
            <Col md="6">
              <d>
                Meet Jacob Blasdell, our Founder, who is really the driving
                force behind our whole brand. Okay, he is the only one working
                on this project. That is to say, I, I am the only one working on
                this project.
                <br />
                This is actually the first webpage that I have ever built from
                the ground up by myself. I am also about to start working on an
                app in React Native which will be on my GitHub page soon. I
                built this site specifically because I like the idea of
                connecting the online environment to real life.
              </d>
              <hr />
              <img src="../assets/images/married.jpg" />
            </Col>
            <Col md="12">
              I am open to any criticisms or critiques that anyone might offer,
              I am only looking to get better and can't wait to find a place to
              call home. I am looking to spend the next 20 years of my life with
              one employer before I retire. If that next employer is not the
              person reading this right now, that's okay, but if you know of a
              place where I would be needed and could be of use please let them
              and I know.
            </Col>
          </Row>
        </Container>
        <Container>
          <Row>
            <Col xs={6} md={4}>
              <img src="../assets/images/fun.jpg" />
            </Col>
            <Col xs={6} md={4}>
              <img src="../assets/images/kids.jpg" />
            </Col>
            <Col xs={6} md={4}>
              <img src="../assets/images/golf.jpg" />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
export default About;
