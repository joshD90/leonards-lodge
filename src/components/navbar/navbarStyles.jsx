import styled from "styled-components";
import { colorScheme as colors } from "../../css variables/colorsScheme";

export const Container = styled.div`
  position: sticky;
  top: 0;
  height: 60px;
  background-color: ${colors.dark};
  background: linear-gradient(
    to right,
    rgba(25, 26, 25, ${(props) => props.opacity}),
    rgb(25, 26, 25, ${(props) => props.opacity})
  );
  width: 100vw;
  color: white;
  display: flex;
  align-items: ${(props) => (props.dropped ? "flex-start" : "center")};
  justify-content: flex-end;
  /* opacity: ${(props) => props.opacity}; */

  z-index: 100;
  @media (max-width: 850) {
    height: 100vh;
  }
`;

export const BurgerSpan = styled.span`
  height: 3px;
  background-color: ${colors.extraLight};
  margin: 3px 0;
  width: 70%;
`;

export const BurgerDiv = styled.div`
  position: absolute;
  right: 10px;
  top: 5px;
  height: 70%;
  width: 55px;
  border: 1px solid white;
  border-radius: 5px;
  margin: 0px 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  z-index: 5;
  cursor: pointer;
  color: ${colors.extraLight};

  &:hover {
    color: white;
  }
  &:hover ${BurgerSpan} {
    background-color: white;
  }
  @media (min-width: 851px) {
    display: none;
  }
`;

export const NavItemContainer = styled.div`
  display: flex;
  height: 60px;
  align-items: center;
  justify-content: space-between;
  transition: all 1s ease;
  overflow: hidden;
  @media (max-width: 850px) {
    position: sticky;
    top: 0;
    left: 0px;
    height: ${(props) => (props.dropped ? "100vh" : 0)};
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    width: 100vw;
    background-color: ${colors.dark};
    opacity: ${(props) => (props.dropped ? 1 : 0.3)};
  }
`;

export const NavItem = styled.span`
  color: ${colors.highlight};
  font-size: 1.2rem;
  margin-right: 25px;
  align-self: center;
  cursor: pointer;
  transition: color 0.5s ease;
  &:hover {
    color: white;
  }
  @media (max-width: 850px) {
    font-size: 2rem;
  }
  @media (max-width: 480px) {
    font-size: 1.4rem;
  }
`;
