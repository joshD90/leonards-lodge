//import React and Hooks
import React, { useEffect, useState, useRef } from "react";
//import Images that Will be Used
import lodgeImg from "../../assets/banner_2.jpg";
import grass from "../../assets/grass.png";
import treeAspen from "../../assets/tree_aspen.png";
import treeBranch from "../../assets/treeBranch.png";
import treeTrunk from "../../assets/treeTrunk.png";
import rocks from "../../assets/rocks.png";

//import our components
import Blurb from "../aboutBlurb/Blurb";
import Contact from "../contact/Contact";
import Highlights from "../highlights/Highlights";
import Slider from "../slider/Slider";
import Testimonials from "../testimonials/Testimonials";
import Map from "../../components/map/Map";
import Navbar from "../navbar/Navbar";
//import our styled components
import {
  Container,
  Grass,
  LodgeImg,
  ViewHeightDiv,
  LodgeName,
  LodgeLogo,
  PlantOverlay,
  LeafOverlay,
  TreeTrunkOverlay,
  Rocks,
  RockSpace,
} from "./ParallaxStyles";

function ParallaxContainer() {
  //we want to grab the y positions of our components so we can place the foreground trees
  //on them.  We use a ref to do so however we cannot place a ref direction on a functional component
  //but instead need to put them on a html inside that component so we use forwardRef
  const blurbRef = React.createRef();
  const highlightRef = React.createRef();
  const rockRef = useRef();
  const [blurbY, setBlurbY] = useState();
  const [highlightY, setHighlightY] = useState();
  const [rockY, setRockY] = useState();

  //set up use effect to get the y coordinate
  useEffect(() => {
    const checkYPos = () => {
      setBlurbY(blurbRef.current.offsetTop);
      setHighlightY(highlightRef.current.offsetTop);
      setRockY(rockRef.current.offsetTop);
    };
    checkYPos();
    window.addEventListener("resize", checkYPos);
    return () => window.removeEventListener("resize", checkYPos);
  }, [blurbRef, highlightRef, rockRef]);

  return (
    <Container>
      <Navbar />
      {/* This Section Covers the Banner */}
      <LodgeImg src={lodgeImg} />
      <LodgeLogo>Escape To Tranquility</LodgeLogo>
      <Grass src={grass} />
      {/* As the Banner is position absolute, a div behind it keeps the flow of the website */}
      <ViewHeightDiv>
        <LodgeName>Hazelrock Lodge</LodgeName>
      </ViewHeightDiv>
      {/* Contact Flag */}
      <Contact marginTop="0px" />
      {/* Blurb about the Lodge */}
      <Blurb ref={blurbRef} />
      <PlantOverlay
        top={`calc(${blurbY}px + 20vh)`}
        left={true}
        src={treeAspen}
      />
      <PlantOverlay
        top={`calc(${blurbY}px + 60vh)`}
        right={true}
        src={treeAspen}
      />
      {/* Some of the key features of the Lodge */}
      <Highlights ref={highlightRef} />
      <LeafOverlay
        top={`calc(${highlightY}px + 20vh)`}
        left={true}
        src={treeBranch}
      />
      <LeafOverlay
        top={`calc(${highlightY}px + 60vh)`}
        right={true}
        src={treeBranch}
      />
      <LeafOverlay
        top={`calc(${highlightY}px + 100vh)`}
        left={true}
        src={treeBranch}
      />

      {/* Carousel to Display the Lodge */}
      <Slider />
      {/* Carousel to Display the Feedback */}
      <Testimonials />
      <Map />
      <RockSpace ref={rockRef} style={{ zIndex: -2 }} />
      <Rocks src={rocks} top={`${rockY}px`} style={{ zIndex: 0 }} />
      <Contact marginTop="0" style={{ zIndex: 2 }} />
    </Container>
  );
}

export default ParallaxContainer;
