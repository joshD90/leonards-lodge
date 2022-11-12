import styled from "styled-components";
import { colorScheme as colors } from "../../css variables/colorsScheme";

export const Container = styled.div`
  height: 150vh;
  background-color: ${colors.highlight};
  width: 100vw;
  position: relative;
  @media (max-aspect-ratio: 12/16) {
    height: 100vh;
    background-color: blue;
  }
  @media (min-aspect-ratio: 20/12) {
    background-color: red;
    height: 160vh;
  }
`;

export const Photo = styled.img`
  position: absolute;
  top: 20vh;
  left: 50%;
  width: 80vw;
  max-width: 700px;
  object-fit: cover;
  border: 5px solid white;
  box-shadow: 3px 3px 5px 2px;
  transform: rotate(-3deg) translate(-50%, 0);
`;

export const TextDiv = styled.div`
  color: ${colors.dark};
  position: sticky;
  top: 20vh;
  width: 100%;
  display: flex;
  justify-content: center;
  padding-bottom: 40px;
  opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
  @media (max-aspect-ratio: 12/16) {
    top: 24vh;
  }
`;

export const Text = styled.p`
  margin: 0px 15% 50px 15%;
  font-size: 1.8rem;
  line-height: 2rem;
  width: 70vw;
  max-width: 700px;
  text-align: center;
  @media (max-width: 480px) {
    font-size: 1.2rem;
    line-height: 1rem;
  }
`;

export const IntersectionLine = styled.div`
  height: 5px;
  width: 100vw;
  background-color: black;
  position: absolute;
  bottom: 1px;
  @media (min-aspect-ratio: 18/12) {
    bottom: 30vh;
  }
`;
