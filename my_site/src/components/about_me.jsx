import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import { useState } from "react";

function Info() {
  const [isReadMore, setIsReadMore] = useState(true);

  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };
  return (
    <Container id="about" className="justify-content-center" style={{paddingTop: "5rem"}}>
      <Col className="text-container">
        {isReadMore ? (
          <p className="about" style={{ textAlign: "justify" }}>
            Hi! My name is Lucy and I'm currently a thrid year student studying
            Computer Sciencce at Mcgill University. I'm an only child and second
            generation immigrant to my Chinese born parents. They both study
            Software engineering so you can see how I found my interest in this
            field...
            <span
              onClick={toggleReadMore}
              style={{
                fontWeight: "bold",
                cursor: "pointer",
                fontFamily: "Inter",
                fontSize: "2rem",
              }}
            >
              Read more
            </span>
          </p>
        ) : (
          <p className="about" style={{ textAlign: "justify" }}>
            Hi! My name is Lucy and I'm currently a thrid year student studying
            Computer Sciencce at Mcgill University. I'm an only child and second
            generation immigrant to my Chinese born parents. They both study
            Software engineering so you can see how I found my interest in this
            field Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            quis lacus nec urna accumsan feugiat. Nam pharetra tempus dui, at
            convallis arcu tincidunt id. Sed euismod velit erat, nec suscipit
            ligula fermentum vel. Donec auctor, sem nec maximus aliquam, nibh
            nisl tempor ipsum, vel aliquam leo tortor non sem. Vestibulum sed
            posuere lectus. Morbi a lectus turpis. Fusce lobortis enim eget
            tincidunt suscipit. Cras venenatis sed augue nec iaculis. Quisque
            fermentum est eros, sed tristique velit gravida eu. Vestibulum ante
            ipsum primis in faucibus orci luctus et ultrices posuere cubilia
            curae; Suspendisse potenti. Morbi cursus diam eros, et pharetra
            turpis eleifend ac. Quisque non lorem ac ligula laoreet pulvinar nec
            quis leo. Nulla tempus velit sed mollis ornare. Nullam accumsan
            mollis lacus, ut consequat nisi vulputate a. Donec porttitor varius
            tellus eget faucibus. Sed ac tincidunt ante. Maecenas cursus enim a
            nibh mattis porta. Cras arcu urna, cursus vel consectetur in,
            fringilla vel purus. Aliquam sagittis vitae ante non pharetra.
            Mauris viverra maximus orci, quis placerat nisl varius in. Fusce
            vitae sapien vel risus pellentesque commodo. Pellentesque ornare et
            quam vitae tincidunt. Curabitur imperdiet, felis a scelerisque
            luctus, neque ipsum porta augue, eu commodo lectus orci sit amet
            nunc. Vivamus non velit non orci ullamcorper tristique ac nec felis.
            Aliquam molestie nisi id felis blandit lobortis.
            <br />
            <span
              onClick={toggleReadMore}
              style={{
                fontWeight: "bold",
                cursor: "pointer",
                fontFamily: "Inter",
                fontSize: "2rem",
              }}
            >
              Read less
            </span>
          </p>
        )}
      </Col>
    </Container>
  );
}

export default Info;
