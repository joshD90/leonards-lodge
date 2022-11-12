// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/effect-fade";

import { SlideInternalDiv, SlideInternalP } from "./TestimonialStyles";

export const TestimonialSwiper = () => {
  const slideStyles = {
    height: "100%",
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "1.5rem",
    lineHeight: "2rem",
    fontWeight: "700",
    color: "white",
    fontFamily: "cursive",
    opacity: "inherit",
  };
  return (
    <Swiper
      modules={[Autoplay, EffectFade]}
      effect="fade"
      spaceBetween={50}
      slidesPerView={1}
      style={{ width: "100%", height: "100%", zIndex: 1 }}
      autoplay={true}
      fadeEffect={{ crossFade: true }}
    >
      <SwiperSlide style={slideStyles}>
        <SlideInternalDiv>
          "I visited Hazelrock Lodge recently and was very impressed by the
          level of finish and sense of space inside. It is furnished and
          equipped to a level beyond a holiday let, and is in immaculate
          condition. Very suitable for families, I liked the seating area just
          off the landing upstairs that gives that extra practical space for
          play or hanging out. There is a view of the lake from upstairs, and a
          bluebell wood at the back of the house, perfect for wildlife
          observation! I wouldn't hesitate to recommend this property if you are
          holidaying in the East Cavan area."
          <SlideInternalP>Sharon Cooney</SlideInternalP>
        </SlideInternalDiv>
      </SwiperSlide>
      <SwiperSlide style={slideStyles}>
        <SlideInternalDiv>
          "Fantastic place, beautiful with loads of room. It was such a relaxing
          time"
          <SlideInternalP>Owen Mason</SlideInternalP>
        </SlideInternalDiv>
      </SwiperSlide>
      <SwiperSlide style={slideStyles}>Slide 3</SwiperSlide>
      <SwiperSlide style={slideStyles}>Slide 4</SwiperSlide>
    </Swiper>
  );
};
