import React, { useEffect, useState } from "react";

//import our nav styles
import {
  BurgerDiv,
  BurgerSpan,
  Container,
  NavItem,
  NavItemContainer,
} from "./navbarStyles";

function Navbar({ opacity, scrollTo }) {
  const [dropped, setDropped] = useState(false);

  const goTo = (e) => {
    setDropped(false);
    scrollTo(e.target.id);
  };

  return (
    <Container dropped={dropped} opacity={opacity}>
      <NavItemContainer dropped={dropped}>
        <NavItem onClick={goTo} id="home">
          Home
        </NavItem>
        <NavItem onClick={goTo} id="contact">
          Contact
        </NavItem>
        <NavItem onClick={goTo} id="about">
          About
        </NavItem>
        <NavItem onClick={goTo} id="highlight">
          Highlights
        </NavItem>
        <NavItem onClick={goTo} id="gallery">
          Gallery
        </NavItem>
        <NavItem onClick={goTo} id="map">
          Directions
        </NavItem>
      </NavItemContainer>
      <BurgerDiv
        onClick={() =>
          dropped === true ? setDropped(false) : setDropped(true)
        }
      >
        <BurgerSpan />
        <BurgerSpan />
        <BurgerSpan />
      </BurgerDiv>
    </Container>
  );
}

export default Navbar;
