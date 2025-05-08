import React, { useState, useEffect } from 'react';
import { Card, Button, Container, Row, Col, Alert } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import eventService from '../services/eventService';

function EventWorkshop() {
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

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this event?')) {
      try {
        await eventService.deleteEvent(id);
        // Remove the deleted event from state
        setEvents(events.filter(event => event.id !== id));
      } catch (err) {
        setError('Failed to delete event. Please try again.');
      }
    }
  };

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
        <Button 
          variant="success" 
          as={Link} 
          to="/user/event-workshop/create"
        >
          Create New Event
        </Button>
      </div>
      
      {events.length === 0 ? (
        <Alert variant="info">No events found. Create your first event!</Alert>
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
                  <div className="d-flex justify-content-between">
                    <Button 
                      variant="primary" 
                      size="sm"
                      as={Link}
                      to={`/user/event-workshop/view/${event.id}`}
                    >
                      View Details
                    </Button>
                    <Button 
                      variant="warning"   
                      size="sm"
                      as={Link}
                      to={`/user/event-workshop/edit/${event.id}`}
                    >
                      Edit
                    </Button>
                    <Button 
                      variant="danger" 
                      size="sm"
                      onClick={() => handleDelete(event.id)}
                    >
                      Delete
                    </Button>
                  </div>
                </Card.Footer>
              </Card>
            </Col>
          ))}
        </Row>
      )}
    </Container>
  );
}

export default EventWorkshop;
