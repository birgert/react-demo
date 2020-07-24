import React, { useState, useEffect } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import EventCard from "../components/EventCard";
import Spinner from "react-bootstrap/Spinner";

import { getEvents } from "../services/fakeEventService";

function HomeEvents(props) {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getEvents()
      .then((events) => {
        setEvents(events);
        setLoading(false);
      })
      .catch((err) => {
        console.log("Error: ", err);
      });
  }, []);

  const limitedEvents = events.slice(0, 3);

  return (
    <>
      <Row className="p-3">
        <Col
          lg="12"
          className="text-center rounded"
          style={{ backgroundColor: "#e2e3e5" }}
        >
          <h2>Upcoming Events</h2>
        </Col>
      </Row>
      {loading ? (
        <Row>
          <Spinner animation="border" role="status">
            <span className="sr-only">Loading...</span>
          </Spinner>
        </Row>
      ) : (
        <Row>
          {limitedEvents.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </Row>
      )}
    </>
  );
}

export default HomeEvents;
