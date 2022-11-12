import styled from "styled-components";
import { colorScheme as colors } from "../../css variables/colorsScheme";

export const Container = styled.div`
  width: 100vw;
  position: relative;
  overflow-x: hidden;
  overflow-y: auto;
  height: 100vh;
  perspective: 10px;
`;

export const LodgeImg = styled.img`
  height: 100vh;
  width: 100vw;
  position: absolute;
  z-index: -1;
  object-fit: cover;
  transform-style: preserve-3d;
  transform: translateZ(-7px) scale(1.7);
`;

export const Grass = styled.img`
  height: 200px;
  width: 100vw;
  position: absolute;
  z-index: -1;
  top: calc(100vh - 80px);
  transform-style: preserve-3d;
  transform: translateZ(-2px) scale(1.2);
  @media (max-width: 480px) {
    top: calc(50vh - 60px);
    height: 100px;
  }
`;
export const ViewHeightDiv = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  background: none;
  z-index: -2;
  @media (max-width: 480px) {
    height: 50vh;
  }
`;

export const LodgeName = styled.h1`
  color: white;
  font-size: 4rem;
  text-shadow: 1px 1px 20px ${colors.dark}, 1px 1px 20px ${colors.dark},
    1px 1px 20px ${colors.dark}, 1px 1px 20px ${colors.dark};
  margin: 0;
  padding: 0;
`;

export const LodgeLogo = styled.h2`
  color: white;
  font-size: 2.8rem;
  text-shadow: 1px 1px 20px ${colors.dark}, 1px 1px 20px ${colors.dark},
    1px 1px 20px ${colors.dark}, 1px 1px 20px ${colors.dark};
  margin: 0;
  padding: 0;
  position: absolute;
  top: calc(100vh - 150px);
  left: 50%;
  transform: translate(-50%, 0) translateZ(-5px) scale(1.5);
  z-index: -1;
  text-align: center;
`;

export const PlantOverlay = styled.img`
  position: absolute;
  top: ${(props) => props.top + "px"};
  left: ${(props) => props.left && 0 - props.horizontalAdjust + "px"};
  right: ${(props) => props.right && 0 - props.horizontalAdjust + "px"};
  width: ${(props) => props.width + "px"};
  object-fit: cover;
  z-index: 5;
  transform: translateZ(2px) scale(0.9);
`;

export const TreeImg = styled.img`
  position: absolute;
  top: 150vh;
  left: -400px;
  width: 700px;
  object-fit: cover;
  z-index: 1;
`;
export const TreeImg2 = styled.img`
  position: absolute;
  top: 170vh;
  right: -400px;
  width: 700px;
  object-fit: cover;
  z-index: 1;
`;

export const TreeBranch1 = styled.img`
  position: absolute;
  top: 340vh;
  left: -50px;
  z-index: 3;
  object-fit: cover;
  width: 300px;
`;

export const TreeBranch2 = styled.img`
  position: absolute;
  top: 440vh;
  right: -50px;
  z-index: 3;
  object-fit: cover;
  width: 400px;
`;
