import styled from "styled-components";
import { colorScheme as colors } from "../../css variables/colorsScheme";

export const Container = styled.div`
  min-height: 100vh;
  width: 100vw;
  position: relative;
`;

export const LodgeImg = styled.img`
  height: 100vh;
  width: 100vw;
  position: absolute;
  z-index: -1;
  object-fit: cover;
`;

export const Grass = styled.img`
  height: 200px;
  width: 100vw;
  position: absolute;
  z-index: -1;
  top: calc(100vh - 120px);
`;
export const ViewHeightDiv = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const TreeImg = styled.img`
  position: absolute;
  top: 150vh;
  left: -400px;
  width: 700px;
  object-fit: cover;
  z-index: 1;
`;
