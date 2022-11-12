import styled from "styled-components";
import { colorScheme as colors } from "../../css variables/colorsScheme";

export const Container = styled.div`
  width: 27%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  transform: rotate(${(props) => props.rotated});
  transition: transform 1s ease;
  box-shadow: 3px 3px 8px 2px ${colors.dark};
  margin-bottom: 50px;
  &:hover {
    transform: rotate(0deg) scale(1.1);
    z-index: 1;
  }
  @media (max-width: 1024px) {
    width: 45%;
  }
  @media (max-width: 480px) {
    width: 90%;
  }
`;

export const Photo = styled.img`
  width: 90%;
  margin: 5px 5% 5px;
`;

export const Text = styled.p`
  font-family: cursive;
  font-size: 2rem;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SubText = styled.p`
  font-size: 1.3rem;
  font-weight: 500;
  width: 90%;
  margin-top: -5px;
`;
