import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import "@fontsource/rubik";
import Collage from "./collage";
import img from "../images/IMG_3772.JPG";
function Home() {
  return (
    <Container id="home" fluid className="outer-container flex-nowrap" >
      <Row className="justify-content-center align-items-center">
        {/*<Col><Collage/></Col>*/}
        <Col className="about-pic" style={{ height: '100vh', position: 'relative' }}>
          <img src={img} alt="parking lot" className="img-fluid"></img>
        </Col>
        <Col style={{paddingRight: "5rem"}}className="text-container text-center">
          <h1 className="greeting">There's plenty to still learn</h1>
          <p className="intro">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
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
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
