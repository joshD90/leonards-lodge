import styled from "styled-components";
import { colorScheme as colors } from "../../css variables/colorsScheme";

export const Container = styled.div`
  height: 150px;
  background-color: ${colors.mid};
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: ${(props) => props.marginTop};
  flex-wrap: wrap;
`;

export const Header = styled.span`
  font-size: 2rem;
  color: ${colors.highlight};
  width: 100%;
  text-align: center;
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
`;
