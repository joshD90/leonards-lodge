import styled from "styled-components";
import { colorScheme as colors } from "../../css variables/colorsScheme";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: ${colors.dark};
  color: white;
  position: relative;
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
`;

export const SlideInternalP = styled.p`
  font-family: "sans-serif";
  display: flex;
  justify-content: flex-end;
  font-weight: 500;
`;
