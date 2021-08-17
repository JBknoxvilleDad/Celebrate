import React, { Component } from 'react';

class Directory extends Component {
    constructor(props) {
        super(props);
        this.state = {
          cards: [
            {
              id: 0,
              name: "Christmas1",
              image: "assets/images/1.jpg",
              description: "Red background with snowflakes, Very Merry.",
            },
            {
              id: 1,
              name: "Christmas 2",
              image: "assets/images/2.jpg",
              description: "Black framed classic look, Merry Christmas.",
            },
            {
              id: 2,
              name: "Easter1",
              image: "assets/images/3.jpg",
              description:
                "Hanging Easter eggs on pastel background, Happy Easter.",
            },
            {
              id: 3,
              name: "Retirement1",
              image: "assets/images/4.jpg",
              description: "Navy Blue with gold trim, Happy Reitrement.",
            },
          ],
        };
    }
    render() {
        const directory = this.state.cards.map(card => {
            return (
                <div className="col">
                    <img src={card.image} alt={card.name} />
                    <h2>{card.name}</h2>
                    <p>{card.description}</p>
                </div>
            );
        });

        return (
            <div className="container">
                <div className="row">
                    {directory}
                </div>
            </div>
        );
    }
}
export default Directory;