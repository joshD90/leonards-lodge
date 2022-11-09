import React from "react";
import bedroom from "../../assets/interior_bedroom.jpg";
import { Container, Photo, Text, TextDiv } from "./BlurbStyles";

function Blurb({ offsetY }) {
  return (
    <Container>
      <TextDiv>
        <Text
          style={{
            transform: `translateY(+${
              (offsetY - (window.screen.height + 100)) * 0.3
            }px)`,
          }}
        >
          Hazelrock Lodge is a luxurious log cabin situated amid the tranquil
          lakes and hills of Cavan, beside Lough Dargan. Located just over an
          hour's drive from Dublin, this well-furnished accommodation offers the
          perfect peaceful getaway for anyone wishing to enjoy rural Ireland.
        </Text>
      </TextDiv>
      <Photo
        src={bedroom}
        style={{
          transform: `translateY(-${
            (offsetY - (window.screen.height + 100)) * 2
          }px)`,
        }}
      />
    </Container>
  );
}

export default Blurb;
