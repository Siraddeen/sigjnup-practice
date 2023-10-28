import React from "react";
import { Container, Form, Button } from "react-bootstrap";
import "../styles/home.css";

const Home = () => {
  return (
    <Container>
      <h1>Welcome to my website</h1>
      <p>we are here to study</p>
      <Button variant="primary" type="submit">
        Get Started
      </Button>
    </Container>
  );
};

export default Home;
