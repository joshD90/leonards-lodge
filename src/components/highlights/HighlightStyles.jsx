import styled from "styled-components";
import { colorScheme as colors } from "../../css variables/colorsScheme";

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
  /* background-color: ${colors.highlight}; */
  background-color: #ebf7c8;
  height: 80vh;
  @media (max-width: 1024px) {
    height: auto;
  }
`;
