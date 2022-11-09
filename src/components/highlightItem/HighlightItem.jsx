import React from "react";

import { Container, Photo, Text, SubText } from "./HighlightItemStyles";

function HighlightItem({ rotated, caption, subCaption, image }) {
  return (
    <Container rotated={rotated}>
      <Photo src={image} />
      <Text>{caption}</Text>
      <SubText>{subCaption}</SubText>
    </Container>
  );
}

export default HighlightItem;
