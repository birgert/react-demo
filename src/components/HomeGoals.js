import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Image } from "react-bootstrap";

function HomeGoals(props) {
  return (
    <>
      <Row className="p-3">
        <Col
          lg="12"
          className="text-center rounded"
          style={{ backgroundColor: "#e2e3e5" }}
        >
          <h2>Our Goals</h2>
        </Col>
      </Row>
      {/* GOAL 1 */}
      <Row className="p-3">
        <Col lg="5" className="">
          <Image
            src="https://picsum.photos/id/1084/400/300"
            width="100%"
            rounded
          />
        </Col>
        <Col lg="7">
          <h3>Lorem ipsum dolor sit amet</h3>
          <p>
            Consectetur adipiscing elit. Fusce ornare lorem non mattis
            sollicitudin. Etiam eros lorem, dignissim in eleifend vel,
            condimentum ut nunc. Nunc luctus, purus a scelerisque porttitor,
            lorem ligula tempor nulla, ac aliquam sapien metus vel urna. Mauris
            tempus lectus massa, non faucibus massa bibendum ac. In nunc odio,
            rutrum ut nisl eget, mollis aliquet nisi. Aenean viverra dapibus
            orci, eu bibendum ante rhoncus non. Aliquam bibendum tortor eu arcu
            faucibus tempus.
          </p>
        </Col>
      </Row>
      {/* GOAL 2 */}
      <Row className="p-3">
        <Col lg="7">
          <h3>Quisque eget turpis risus</h3>
          <p>
            In venenatis laoreet lacinia. Aenean sem tortor, malesuada sit amet
            tellus accumsan, dictum eleifend est. Fusce commodo volutpat urna ut
            sollicitudin. Ut tincidunt condimentum eros, quis tristique purus
            venenatis non. Morbi vel dolor a nunc fermentum cursus. Curabitur
            fringilla aliquet leo, et vulputate velit semper eget. Duis nec
            metus magna. Donec a nibh pulvinar, posuere dui ut, ullamcorper
            arcu. Nunc molestie mollis enim at blandit. Phasellus suscipit
            ligula vel augue vestibulum dapibus. Vivamus lacinia faucibus dui,
            sit amet dapibus risus lobortis eget. Nullam luctus elementum
            sollicitudin. In hac habitasse platea dictumst. Duis et magna eu
            ligula interdum feugiat.
          </p>
        </Col>
        <Col lg="5" className="">
          <Image
            src="https://picsum.photos/id/161/400/300"
            width="100%"
            rounded
          />
        </Col>
      </Row>
    </>
  );
}

export default HomeGoals;
