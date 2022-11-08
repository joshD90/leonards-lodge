import React from "react";
import curve from "../../assets/curveNegative.svg";
import {
  BlurbBody,
  BlurbHeader,
  Container,
  CurveBackground,
} from "./AboutBlurbStyles";

function AboutBlurb() {
  return (
    <Container>
      <CurveBackground src={curve} />
      <BlurbHeader>Hazelrock Lodge</BlurbHeader>
      <BlurbBody>
        Hazelrock Lodge is a luxurious log cabin situated amid the tranquil
        lakes and hills of Cavan, beside Lough Dargan. Located just over an
        hour's drive from Dublin, this well-furnished accommodation offers the
        perfect peaceful getaway for anyone wishing to enjoy rural Ireland.
      </BlurbBody>
    </Container>
  );
}

export default AboutBlurb;
