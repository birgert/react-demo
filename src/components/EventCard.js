import React from "react";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { LinkContainer } from "react-router-bootstrap";

import CalendarIcon from "mdi-react/CalendarIcon";
import MapMarkerIcon from "mdi-react/MapMarkerIcon";

function EventCard({ event }) {
  return (
    <>
      <Col lg="4" className="d-flex align-items-stretch">
        <Card className="mb-3">
          <LinkContainer to={`/event/${event.id}`}>
            <Card.Img variant="top" src={event.thumbnail} />
          </LinkContainer>
          <Card.Body>
            <Card.Title>{event.name}</Card.Title>
            <Card.Text>{event.shortDescription}</Card.Text>
            <div>
              <CalendarIcon /> {event.date}
            </div>
            <div>
              <MapMarkerIcon />
              {event.location}
            </div>
            <div className="mt-3">
              <LinkContainer to={`/event/${event.id}`}>
                <Button variant="info">Event Details</Button>
              </LinkContainer>
            </div>
          </Card.Body>
        </Card>
      </Col>
    </>
  );
}

export default EventCard;
