import styled from "styled-components";
import { colorScheme as colors } from "../../css variables/colorsScheme";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: ${colors.dark};
  color: white;
  position: relative;
  @media (max-aspect-ratio: 14/12) {
    height: 80vh;
  }
  @media (max-aspect-ratio: 10/12) {
    height: 60vh;
  }
`;

export const BackgroundImage = styled.div`
  width: inherit;
  height: inherit;
  filter: brightness(50%);
  position: absolute;
  top: 0;
  left: 0;
  background-repeat: no-repeat;
  background-size: cover;
`;

export const SlideInternalDiv = styled.div`
  width: 40%;
  position: relative;
  padding: 60px;
  @media (max-width: 820px) {
    width: 80%;
    font-size: 1.8;
    line-height: 1.8;
  }
  @media (max-width: 480) {
    width: 95%;
    font-size: 1.4rem;
    line-height: 1.2rem;
    padding: 10px;
  }
`;

export const SlideInternalP = styled.p`
  font-family: "sans-serif";
  display: flex;
  justify-content: flex-end;
  font-weight: 500;
`;
