//import React and Hooks
import React, { useEffect, useState, useRef } from "react";
//import Images that Will be Used
import lodgeImg from "../../assets/banner_2.jpg";
import grass from "../../assets/grass.png";
import treeAspen from "../../assets/tree_aspen.png";
import treeBranch from "../../assets/treeBranch.png";
//import our components
import Blurb from "../aboutBlurb/Blurb";
import Contact from "../contact/Contact";
import Highlights from "../highlights/Highlights";
import Slider from "../slider/Slider";
import Testimonials from "../testimonials/Testimonials";
import Map from "../../components/map/Map";
//import our styled components
import {
  Container,
  Grass,
  LodgeImg,
  TreeImg,
  ViewHeightDiv,
  TreeImg2,
  TreeBranch1,
  TreeBranch2,
  LodgeName,
  LodgeLogo,
  PlantOverlay,
} from "./ParallaxStyles";

function ParallaxContainer() {
  //we want to grab the y positions of our components so we can place the foreground trees
  //on them.  We use a ref to do so however we cannot place a ref direction on a functional component
  //but instead need to put them on a html inside that component so we use forwardRef
  const blurbRef = React.createRef();
  const [blurbY, setBlurbY] = useState();
  //set up use effect to get the y coordinate
  useEffect(() => {
    const { y } = blurbRef.current.getBoundingClientRect();
    setBlurbY(y);
  }, [blurbRef]);

  return (
    <Container>
      {/* This Section Covers the Banner */}
      <LodgeImg src={lodgeImg} />
      <LodgeLogo>Escape To Tranquility</LodgeLogo>
      <Grass src={grass} />
      {/* As the Banner is position absolute, a div behind it keeps the flow of the website */}
      <ViewHeightDiv>
        <LodgeName>Hazelrock Lodge</LodgeName>
      </ViewHeightDiv>
      {/* Contact Flag */}
      <Contact marginTop="60px" />
      {/* Blurb about the Lodge */}
      <Blurb ref={blurbRef} />
      <PlantOverlay
        top={blurbY + 100}
        left={true}
        width={400}
        horizontalAdjust={200}
        src={treeAspen}
      />
      {/* Some of the key features of the Lodge */}
      <Highlights />
      {/* Carousel to Display the Lodge */}
      <Slider />
      {/* Carousel to Display the Feedback */}
      <Testimonials />
      <Map />
      <Contact marginTop="0" />
    </Container>
  );
}

export default ParallaxContainer;
