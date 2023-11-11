import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import { useState } from "react";
function AboutMe() {
  const [isReadMore, setIsReadMore] = useState(true);

  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };
  return (
    <Container fluid className="about-container">
      <Row>
        <Col className="image-container">
          <img
            src="https://picsum.photos/200/300"
            alt="Lucy Mao"
            className="about-image"
          />
        </Col>
        <Col className="text-container">
          <p style={{ textAlign: "justify" }}>
            There is something to say about the human experience...
          </p>

          {isReadMore ? (
            <p style={{ textAlign: "justify" }}>
              Here is who I am and yet it is nothing at all, you will know what
              I want you to know. And you will know nothing more.
              <br /> My name is Lucy Mao.
              <br /> I am a student majoring in computer science and minoring in
              cognitive science at McGill university. I have no siblings and I
              am a first generation immigrant, both my parents are from China,
              and as far as I can tell, every one of my known ancestors are as
              well.
              <br /> I have a cat and a dog, the dog is a family pet, I've have
              him since I was 13, and the cat is my own, I got him when I was
              20, living alone. When I got my dog, cookie, I didn't know how to
              take of myself, let alone an animal; he is not well trained, but
              he has absorbed the love of a family that only knew how to give it
              through action. I think that's why he loves the way he does,
              without the verbal component, without the generational, cultural
              discnonnect all he knows is our purest form of love.
              <br /> Tofu, my cat (I'm sure you can see a trend in the names at
              this point) met me at a time where I learned from people...
              <span
                onClick={toggleReadMore}
                style={{ fontWeight: "bold", cursor: "pointer" }}
              >
                Read more
              </span>
            </p>
          ) : (
            <p style={{ textAlign: "justify" }}>
              Here is who I am and yet it is nothing at all, you will know what
              I want you to know. And you will know nothing more.
              <br /> My name is Lucy Mao.
              <br /> I am a student majoring in computer science and minoring in
              cognitive science at McGill university. I have no siblings and I
              am a first generation immigrant, both my parents are from China,
              and as far as I can tell, every one of my known ancestors are as
              well.
              <br /> I have a cat and a dog, the dog is a family pet, I've have
              him since I was 13, and the cat is my own, I got him when I was
              20, living alone. When I got my dog, cookie, I didn't know how to
              take of myself, let alone an animal; he is not well trained, but
              he has absorbed the love of a family that only knew how to give it
              through action. I think that's why he loves the way he does,
              without the verbal component, without the generational, cultural
              discnonnect all he knows is our purest form of love.
              <br /> Tofu, my cat (I'm sure you can see a trend in the names at
              this point) met me at a time where I learned from people
              <br />
              <span
                onClick={toggleReadMore}
                style={{ fontWeight: "bold", cursor: "pointer" }}
              >
                Read less
              </span>
            </p>
          )}
        </Col>
      </Row>
    </Container>
  );
}

export default AboutMe;
