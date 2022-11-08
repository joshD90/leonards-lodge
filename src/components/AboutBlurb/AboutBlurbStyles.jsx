import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  background-color: #e7e7e7;
  height: 80%;
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export const CurveBackground = styled.img`
  width: 450%;
  height: 170%;
  position: absolute;
  transform: translate(-35%, -5%) rotate(180deg);
  background-color: rgba(0, 0, 0, 0);
`;

export const BlurbHeader = styled.h2`
  color: #a1a1a1;
  font-size: 3rem;
  align-self: flex-start;
  margin: 100px 0 0 10vw;
  z-index: 1;
`;
export const BlurbBody = styled.p`
  text-align: center;
  color: #a1a1a1;
  width: 40vw;
  font-size: 1.4rem;
  align-self: flex-end;
  margin-right: 10vw;
  transform: translateY(-60px);
  z-index: 1;
`;
