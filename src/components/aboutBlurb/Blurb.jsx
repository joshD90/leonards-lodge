import React, { useState, useEffect, useRef } from "react";
import bedroom from "../../assets/interior_diningroom_.jpeg";
import {
  Container,
  Photo,
  Text,
  TextDiv,
  IntersectionLine,
} from "./BlurbStyles";
//we use React.fowardRef to allow us to pass on the ref to the container
const Blurb = React.forwardRef((props, ref) => {
  const bottomRef = useRef();
  const [isVisible, setIsVisible] = useState(false);
  //our options for intersection observer
  const options = { rootMargin: "0px", threshold: 0.1 };

  //the callback function for our below intersection observer
  const doIntersect = (entries) => {
    const [entry] = entries;

    //the first time the intersection observer is set it will trigger this function
    //so we cant simply set Visible to true
    setIsVisible(entry.isIntersecting);
  };
  //as we have the text position as sticky we do not want it visible at the top of the div.
  //We trigger an intersection observer to make it visible once we are part of the way down the div
  useEffect(() => {
    const observer = new IntersectionObserver(doIntersect, options);
    //this is the div that we put the observer on and we position this div at the necessary height so that
    //the text only becomes visible / invisible once under the photo
    bottomRef && observer.observe(bottomRef.current);
    //we need to return an unobserve so that the event listeners don't build on top of each other
    return () => bottomRef && observer.unobserve(bottomRef.current);
  });

  return (
    <Container ref={ref}>
      <TextDiv isVisible={isVisible}>
        <Text>
          Hazelrock Lodge is a luxurious log cabin situated amid the tranquil
          lakes and hills of Cavan, beside Lough Dargan. Located just over an
          hour's drive from Dublin, this well-furnished accommodation offers the
          perfect peaceful getaway for anyone wishing to enjoy rural Ireland.
        </Text>
      </TextDiv>
      <Photo src={bedroom} />
      {/* we set this div to use as our reference as to when the text should be visible */}
      <IntersectionLine ref={bottomRef} />
    </Container>
  );
});

export default Blurb;
