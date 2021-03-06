import React, { useEffect, useState } from "react";
import Row from "react-bootstrap/Row";
import Spinner from "react-bootstrap/Spinner";

import EventCard from "../components/EventCard";

import { getEvents } from "../services/fakeEventService";

function Topics(props) {
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

  return (
    <div>
      <h2>Events</h2>
      {loading ? (
        <Row>
          <Spinner animation="border" role="status">
            <span className="sr-only">Loading...</span>
          </Spinner>
        </Row>
      ) : (
        <Row>
          {events.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </Row>
      )}
    </div>
  );
}

export default Topics;
