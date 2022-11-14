import styled from "styled-components";
import { colorScheme as colors } from "../../css variables/colorsScheme";

export const Container = styled.div`
  position: relative;
  height: 150px;
  background-color: ${colors.mid};
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: ${(props) => props.marginTop};
  flex-wrap: wrap;
  z-index: 2;
  @media (max-width: 850px) {
  }
  @media (max-width: 480px) {
    height: auto;
    padding: 5px;
  }
`;

export const Header = styled.span`
  font-size: 2rem;
  color: ${colors.highlight};
  width: 100%;
  text-align: center;
  @media (max-width: 850px) {
  }
  @media (max-width: 480px) {
    font-size: 1.4rem;
    margin: 5px 0%;
  }
`;

export const Button = styled.button`
  font-size: 2.2rem;
  padding: 10px;
  border-radius: 5px;
  background-color: ${colors.light};
  color: white;
  cursor: pointer;
  &:hover {
    background-color: ${colors.dark};
    color: ${colors.highlight};
  }
  @media (max-width: 850px) {
  }
  @media (max-width: 480px) {
    font-size: 1.7rem;
    padding: 5px;
  }
`;
