// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

import bathroom1 from "../../assets/interior_bathroom_1.jpeg";
import bathroom2 from "../../assets/interior_bedroom_2.jpg";
import bedroom3 from "../../assets/interior_bedroom_3.jpeg";
import kitchen2 from "../../assets/interior_kitchen_2.jpeg";
import sittingRoom2 from "../../assets/interior_sittingroom_2.jpeg";
import lane from "../../assets/lane_1.jpg";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export default () => {
  const images = [bathroom1, bathroom2, bedroom3, kitchen2, sittingRoom2, lane];
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      loop={true}
      style={{
        height: "inherit",
        width: "inherit",
        margin: "inherit",
        padding: "inherit",
      }}
    >
      {images.map((image) => {
        return (
          <SwiperSlide>
            <img
              src={image}
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};
