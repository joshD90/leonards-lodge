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
  top: 0;
  @media (max-width: 850px) {
    height: 60vh;
    transform: translateZ(-6px) scale(2);
  }
  @media (max-width: 480px) {
    height: 50vh;
    transform: translateZ(-5px) scale(2);
  }
`;

export const Grass = styled.img`
  height: 200px;
  width: 100vw;
  position: absolute;
  z-index: -1;
  top: calc(100vh - 80px);
  transform-style: preserve-3d;
  transform: translateZ(-2px) scale(1.2);
  @media (min-aspect-ratio: 16/9) {
    height: 25vh;
    top: 95vh;
  }
  @media (max-width: 850px) {
    top: 59vh;
    height: 120px;
    transform: translateZ(-1px) scale(1.15);
  }
  @media (max-width: 480px) {
    top: calc(48vh);
    height: 100px;
    transform: translateZ(-0.5px) scale(1.1);
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
  position: static;
  transform: translateY(-60px);
  @media (max-width: 850px) {
    height: 60vh;
  }
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
  @media (max-width: 480px) {
    font-size: 2.8rem;
  }
  @media (min-aspect-ratio: 16/9) {
    font-size: 6rem;
  }
`;

export const LodgeLogo = styled.h2`
  color: white;
  font-size: 2rem;
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

  @media (max-width: 850px) {
    top: calc(50vh - 75px);
  }
  @media (max-width: 480px) {
    top: calc(50vh - 75px);
    font-size: 1.8rem;
  }
`;

export const PlantOverlay = styled.img`
  position: absolute;
  top: ${(props) => props.top};
  left: ${(props) => props.left && "-30vw"};
  right: ${(props) => props.right && "-30vw"};
  width: 60vw;
  object-fit: cover;
  z-index: 5;
  transform: translateZ(2px) scale(0.9);
  @media (max-width: 480px) {
    width: 80vw;
    left: ${(props) => props.left && "-50vw"};
    right: ${(props) => props.right && "-50vw"};
  }
`;
export const LeafOverlay = styled.img`
  position: absolute;
  top: ${(props) => props.top};
  left: ${(props) => props.left && "-5vw"};
  right: ${(props) => props.right && "-5vw"};
  width: 30vw;
  object-fit: cover;
  z-index: 5;
  transform: ${(props) =>
    props.right
      ? "translateZ(2px) scale(0.9) rotate(180deg)"
      : "translateZ(2px) scale(0.9)"};

  @media (max-width: 480px) {
    width: 40vw;
    left: ${(props) => props.left && "-10vw"};
    right: ${(props) => props.right && "-10vw"};
  }
`;

export const RockSpace = styled.div`
  height: 20vh;
  width: 100%;
  background-color: ${colors.extraLight};
`;

export const Rocks = styled.img`
  position: absolute;
  width: 100vw;
  object-fit: stretch;
  top: ${(props) => props.top};
  z-index: 1;
  transform: translateZ(2px) scale(0.9);
  max-height: 30vh;
  @media (max-width: 480px) {
    transform: translateZ(2px) scale(0.9) translateY(-50px);
  }
`;
