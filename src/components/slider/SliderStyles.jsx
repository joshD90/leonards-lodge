import styled from "styled-components";
import { colorScheme as colors } from "../../css variables/colorsScheme";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: ${colors.highlight};
  display: flex;
  align-items: center;
  justify-content: center;
  @media (min-height: 1024px) {
    height: 60vh;
  }
  @media (max-width: 480px) {
    height: 60vh;
  }
`;

export const Wrapper = styled.div`
  width: 80vw;
  height: 70%;
  padding: 0;
  margin: 0;
  @media (max-width: 1024px) {
    width: 100vw;
    height: 90%;
  }
`;
