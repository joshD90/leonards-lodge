import React from "react";
import { Container, Header, Button } from "./ContactStyles";

function Contact({ marginTop }) {
  return (
    <Container marginTop={marginTop}>
      <Header>You Can Ring Us Directly For Bookings</Header>
      <Button>0851234567</Button>
    </Container>
  );
}

export default Contact;
