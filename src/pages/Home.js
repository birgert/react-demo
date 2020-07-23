import React, { useEffect, useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import EventCard from "../components/EventCard";
import Spinner from "react-bootstrap/Spinner";

import { getEvents } from "../services/fakeEventService";

function Home(props) {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getEvents()
      .then((events) => {
        console.log("EVENTS: ", events);
        setEvents(events);
        setLoading(false);
      })
      .catch((err) => {
        console.log("Error: ", err);
      });
  }, []);
  return (
    <>
      <div>
        <h2>Home</h2>
      </div>
      {loading ? (
        <Row>
          <Spinner animation="border" role="status">
            <span className="sr-only">Loading...</span>
          </Spinner>
        </Row>
      ) : (
        <Row>
          {events.map((event) => (
            <Col key={event.id} lg="4">
              <EventCard event={event} />
            </Col>
          ))}
        </Row>
      )}
    </>
  );
}

export default Home;
