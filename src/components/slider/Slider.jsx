import React from "react";
import { Container, Wrapper } from "./SliderStyles";
import Swiper from "./Swiper";

// import Swiper and modules styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Slider = React.forwardRef((props, ref) => {
  return (
    <Container ref={ref}>
      <Wrapper>
        <Swiper />
      </Wrapper>
    </Container>
  );
});

export default Slider;
