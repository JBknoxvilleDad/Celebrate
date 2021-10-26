import React, { useState } from "react";
import { UncontrolledCarousel } from "reactstrap";

const items = [
  {
    key: "1",
    altText: "Pic1",
    src: "assets/carouselpics/Pic1.jpg",
    caption: "Christmas Postcard.",
  },
  {
    key: "2",
    altText: "Pic2",
    src: "assets/carouselpics/Pic2.jpg",
    caption: "Paw Patrol Halloween.",
  },
  {
    key: "3",
    altText: "Pic3",
    src: "assets/carouselpics/Pic3.jpg",
    caption: "Congratulations Card.",
  },
];

const PostcardExamples = () => <UncontrolledCarousel items={items} />;

export default PostcardExamples;
