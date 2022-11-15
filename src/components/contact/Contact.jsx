import React from "react";
import { Container, Header, Button } from "./ContactStyles";

const Contact = React.forwardRef(({ marginTop }, ref) => {
  return (
    <Container marginTop={marginTop} ref={ref}>
      <Header>You Can Ring Us Directly For Bookings</Header>
      <Button>0851234567</Button>
    </Container>
  );
});

export default Contact;
