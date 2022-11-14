import React from "react";

//import our nav styles
import { BurgerDiv, BurgerSpan, Container, NavItem } from "./navbarStyles";

function Navbar() {
  return (
    <Container>
      <NavItem>Home</NavItem>
      <NavItem>Contact</NavItem>
      <NavItem>About</NavItem>
      <NavItem>Highlights</NavItem>
      <NavItem>Gallery</NavItem>
      <NavItem>Directions</NavItem>
      <BurgerDiv>
        <BurgerSpan />
        <BurgerSpan />
        <BurgerSpan />
      </BurgerDiv>
    </Container>
  );
}

export default Navbar;
