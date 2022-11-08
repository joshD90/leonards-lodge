import styled from "styled-components";

export const Container = styled.section`
  height: 100vh;
  width: 100vw;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  overflow-y: auto;
  overflow-x: hidden;
  perspective: 10px;
`;

export const WaveImg = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
  opacity: 0.8;
`;

export const BannerImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  transform: translateZ(-10px) scale(2);
`;

export const BannerHeader = styled.h1`
  color: white;
  text-align: center;
  z-index: 1;
  font-size: 5rem;
  font-weight: 600;
  font-family: cursive;
  border-radius: 40px;
  box-shadow: 0 0 10px 20px rgba(0, 0, 0, 0.55);
  background-color: rgba(0, 0, 0, 0.55);
`;
export const BannerSubHeader = styled.span`
  text-align: center;
  margin-left: 5%;
  transform: translateZ(-10px) scale(2);
  font-size: 3rem;
  color: white;
  border-radius: 30px;
  box-shadow: 0 0 10px 20px rgba(0, 0, 0, 0.5);
  background-color: rgba(0, 0, 0, 0.5);
`;

export const GrassDiv = styled.img`
  height: 200px;
  width: 100%;
  transform: translateZ(-5px) scale(1.6);
  position: absolute;
  bottom: -200px;
  left: 0;
`;

export const BottomBanner = styled.div`
  width: 100vw;
  height: 600px;
  background-color: lightgreen;
  z-index: 1;
  position: absolute;
  bottom: -600px;
`;

export const BannerContactDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  background-color: #a1a1a1;
`;
export const BannerContactText = styled.h2`
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;
export const BannerContactButton = styled.button`
  background: none;
  color: white;
  border: 1px solid white;
  width: 400px;
  min-height: 40px;
  font-size: 20px;
  margin: 10px;
  cursor: pointer;
  border-radius: 5px;
  &:hover {
    background: white;
    color: darkgray;
    border: 1px solid darkgray;
  }
`;
