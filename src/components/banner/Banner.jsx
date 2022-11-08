import React from "react";
import LodgeImg from "../../assets/banner_2.jpg";
import grass from "../../assets/grass.png";
import Waves from "../../assets/layered-waves-haikei.svg";
import AboutBlurb from "../AboutBlurb/AboutBlurb";
import {
  BannerImage,
  WaveImg,
  Container,
  BottomBanner,
  BannerContactDiv,
  BannerHeader,
  BannerSubHeader,
  GrassDiv,
  BannerContactText,
  BannerContactButton,
} from "./BannerStyles";

function Banner() {
  return (
    <Container>
      <BannerImage src={LodgeImg} />
      <BannerHeader>Hazelrock Lodge</BannerHeader>
      <BannerSubHeader>Escape to Tranquility</BannerSubHeader>
      <GrassDiv src={grass} />
      <BottomBanner>
        <BannerContactDiv>
          <BannerContactText>To Book simply Call -</BannerContactText>
          <BannerContactButton>081234567</BannerContactButton>
        </BannerContactDiv>
        <AboutBlurb />
      </BottomBanner>
    </Container>
  );
}

export default Banner;
