import React, { useEffect, useState } from "react";
import lodgeImg from "../../assets/banner_2.jpg";
import grass from "../../assets/grass.png";
import treeAspen from "../../assets/tree_aspen.png";
import Blurb from "../aboutBlurb/Blurb";
import Contact from "../contact/Contact";
import Highlights from "../highlights/Highlights";
import Slider from "../slider/Slider";
import Testimonials from "../testimonials/Testimonials";
import {
  Container,
  Grass,
  LodgeImg,
  TreeImg,
  ViewHeightDiv,
} from "./ParallaxStyles";

function ParallaxContainer() {
  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.pageYOffset);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Container>
      <LodgeImg
        src={lodgeImg}
        style={{ transform: `translateY(+${offsetY * 0.2}px)` }}
      />
      <Grass
        src={grass}
        style={{ transform: `translateY(+${offsetY * 0.1}px)` }}
      />
      <TreeImg
        src={treeAspen}
        style={{ transform: `translateY(-${offsetY * 0.1}px)` }}
      />
      <ViewHeightDiv>
        <h1>You shall not pass</h1>
      </ViewHeightDiv>
      <Contact />
      <Blurb offsetY={offsetY} />
      <Highlights />
      <Slider />
      <Testimonials offsetY={offsetY} />
      <ViewHeightDiv />
      <ViewHeightDiv />
    </Container>
  );
}

export default ParallaxContainer;
