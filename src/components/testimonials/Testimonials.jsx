import React, { useEffect, useRef, useState } from "react";
import bluebell1 from "../../assets/bluebells/bluebell1.jpg";
import { BgImage, Container } from "./TestimonialsStyles";

function Testimonials({ offsetY }) {
  return (
    <Container>
      <BgImage src={bluebell1} />
      <Testimonials>
        "I visited Hazelrock Lodge recently and was very impressed by the level
        of finish and sense of space inside. It is furnished and equipped to a
        level beyond a holiday let, and is in immaculate condition. Very
        suitable for families, I liked the seating area just off the landing
        upstairs that gives that extra practical space for play or hanging out.
        There is a view of the lake from upstairs, and a bluebell wood at the
        back of the house, perfect for wildlife observation! I wouldn't hesitate
        to recommend this property if you are holidaying in the East Cavan
        area."
      </Testimonials>
    </Container>
  );
}

export default Testimonials;
