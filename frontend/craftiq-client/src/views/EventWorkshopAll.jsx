import React, { useState, useEffect } from 'react';
import { Card, Button, Container, Row, Col, Alert } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import eventService from '../services/eventService';

function EventWorkshopAll() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch events from the API
  useEffect(() => {
    const fetchEvents = async () => {
      try {
        setLoading(true);
        const data = await eventService.getAllEvents();
        setEvents(data);
        setLoading(false);
      } catch (err) {
        setError('Failed to load events. Please try again later.');
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  const formatDate = (dateString) => {
    if (!dateString) return 'Date not available';
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  if (loading) return (
    <Container className="py-5">
      <div className="text-center">Loading events...</div>
    </Container>
  );

  if (error) return (
    <Container className="py-5">
      <Alert variant="danger">{error}</Alert>
    </Container>
  );

  return (
    <Container className="py-5">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2>Event Workshops</h2>
      </div>
      
      {events.length === 0 ? (
        <Alert variant="info">No events currently available.</Alert>
      ) : (
        <Row>
          {events.map(event => (
            <Col md={6} lg={4} className="mb-4" key={event.id}>
              <Card className="h-100 shadow-sm">
                <Card.Body>
                  <Card.Title>{event.eventName}</Card.Title>
                  <Card.Text as="div">
                    <div className="mb-2">
                      <strong>Organizer:</strong> {event.organizer}
                    </div>
                    <div className="mb-2">
                      <strong>Date:</strong> {formatDate(event.eventDate)}
                    </div>
                    <div className="mb-2">
                      <strong>Location:</strong> {event.location}
                    </div>
                    <div className="text-truncate mt-3">
                      {event.description}
                    </div>
                  </Card.Text>
                </Card.Body>
                <Card.Footer className="bg-white">
                 
                </Card.Footer>
              </Card>
            </Col>
          ))}
        </Row>
      )}
    </Container>
  );
}
 
export default EventWorkshopAll;
