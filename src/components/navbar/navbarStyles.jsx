import styled from "styled-components";
import { colorScheme as colors } from "../../css variables/colorsScheme";

export const Container = styled.div`
  position: sticky;
  top: 0;
  height: 60px;
  background-color: ${colors.dark};
  width: 100vw;
  color: white;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  opacity: 0.8;
  z-index: 100;
`;

export const BurgerDiv = styled.div`
  height: 70%;
  width: 55px;
  border: 1px solid white;
  border-radius: 5px;
  margin: 0px 10px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  cursor: pointer;
`;

export const BurgerSpan = styled.span`
  border: 1px solid white;
  width: 80%;
`;

export const NavItem = styled.span`
  color: ${colors.highlight};
  font-size: 1.2rem;
  margin-right: 25px;
  cursor: pointer;
  transition: color 0.5s ease;
  &:hover {
    color: white;
  }
`;
