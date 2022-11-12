import React from "react";
import { BackgroundImage, Container } from "./TestimonialStyles";
import lakeJetty from "../../assets/lake_jetty_1.jpg";
import { TestimonialSwiper } from "./Swiper";
function Testimonials() {
  return (
    <>
      <Container>
        <BackgroundImage
          style={{ backgroundImage: `url(${lakeJetty})` }}
        ></BackgroundImage>
        <TestimonialSwiper />
      </Container>
    </>
  );
}

export default Testimonials;
