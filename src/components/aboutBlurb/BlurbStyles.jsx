import styled from "styled-components";
import { colorScheme as colors } from "../../css variables/colorsScheme";

export const Container = styled.div`
  height: 110vh;
  background-color: ${colors.highlight};
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
`;

export const Photo = styled.img`
  width: 80vw;
  max-width: 700px;
  object-fit: cover;
  border: 5px solid white;
  box-shadow: 3px 3px 5px 2px;
  transform: rotate(-3deg);
  margin-top: 8rem;
`;

export const TextDiv = styled.div`
  position: absolute;
  text-align: center;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Text = styled.p`
  width: 65vw;
  max-width: 500px;
  font-size: 1.4rem;
  line-height: 3rem;
  margin-top: 6rem;
`;
