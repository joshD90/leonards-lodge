import React from "react";
import styled from "styled-components";
import { colorScheme as colors } from "../../css variables/colorsScheme";

const Container = styled.div`
  width: 100%;
  height: 80vh;
  background-color: ${colors.extraLight};
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 480px) {
    height: 70vh;
  }
`;
const Wrapper = styled.div`
  width: 80vw;
  height: 70vh;
  margin: 20px 0%;
  @media (max-width: 480px) {
    width: 100%;
    height: 60vh;
  }
`;

const Map = React.forwardRef((props, ref) => {
  return (
    <Container ref={ref}>
      <Wrapper>
        <iframe
          style={{ width: "inherit", height: "inherit" }}
          id="gmap_canvas"
          src="https://maps.google.com/maps?q=Hazelrock%20Lodge,%20VWMC+64%20Corratinner,%20Beagh,%20County%20Cavan,%20Ireland,%20A82P6F6&t=&z=13&ie=UTF8&iwloc=&output=embed"
          frameBorder="0"
          scrolling="no"
          marginHeight="0"
          marginWidth="0"
        ></iframe>
      </Wrapper>
    </Container>
  );
});

export default Map;
