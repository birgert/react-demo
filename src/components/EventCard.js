import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { LinkContainer } from "react-router-bootstrap";

function EventCard({ event }) {
  return (
    <>
      <Card>
        <Card.Img variant="top" src={event.image} />
        <Card.Body>
          <Card.Title>{event.name}</Card.Title>
          <Card.Text>{event.shortDescription}</Card.Text>
          <LinkContainer to={`/event/${event.id}`}>
            <Button variant="primary">Go somewhere</Button>
          </LinkContainer>
        </Card.Body>
      </Card>
    </>
  );
}

export default EventCard;
