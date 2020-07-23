import React, { useEffect, useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import EventCard from "../components/EventCard";

import { getEvents } from "../services/fakeEventService";

function Topics(props) {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    getEvents()
      .then((events) => {
        console.log("EVENTS: ", events);
        setEvents(events);
      })
      .catch((err) => {
        console.log("Error: ", err);
      });
  }, []);

  return (
    <div>
      <h2>Events</h2>
      <Row>
        {events.map((event) => (
          <Col key={event.id} lg="4">
            <EventCard event={event} />
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default Topics;
