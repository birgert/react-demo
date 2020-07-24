import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { getEvent } from "../services/fakeEventService";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

function EventDetail(props) {
  let { eventId } = useParams();
  const [event, setEvent] = useState({});

  useEffect(() => {
    getEvent(eventId)
      .then((event) => {
        console.log("EVENT: ", event);
        setEvent(event);
      })
      .catch((err) => {
        console.log("Error: ", err);
      });
  }, [eventId]);

  return (
    <>
      <Row>
        <Col>
          <Card>
            <Card.Img variant="top" src={event.image} />
            <Card.Body>
              <Card.Title>{event.name}</Card.Title>
              <Card.Text>
                <div>{event.shortDescription}</div>
                <div>
                  <p>{event.description}</p>
                </div>
              </Card.Text>
              <Button variant="primary">Subscribe</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
}

export default EventDetail;
