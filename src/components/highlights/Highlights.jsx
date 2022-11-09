import React from "react";
import HighlightItem from "../highlightItem/HighlightItem";
import sittingRoom from "../../assets/interior_sitting_room.jpg";
import lane from "../../assets/lane_1.jpg";
import bedroom from "../../assets/interior_bedroom_5.jpeg";
import { Container } from "./HighlightStyles";

function Highlights() {
  return (
    <Container>
      <HighlightItem
        rotated="-3deg"
        caption="Rustic Comfort"
        subCaption="The Cabin is Furnished with All the Comforts of Home"
        image={bedroom}
      />
      <HighlightItem
        rotated="-1deg"
        caption="Spacious Living Areas"
        subCaption="Room to Relax and Enjoy Your Stay in the Country Side"
        image={sittingRoom}
      />
      <HighlightItem
        rotated="4deg"
        caption="Accessible"
        subCaption="Just an Hour's Drive from Dublin"
        image={lane}
      />
    </Container>
  );
}

export default Highlights;
