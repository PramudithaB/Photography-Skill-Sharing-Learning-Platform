import React, { useState, useEffect } from 'react';
import { Container, Card, Row, Col, Button, Alert, Image } from 'react-bootstrap';
import { useParams, Link, useNavigate } from 'react-router-dom';
import eventService from '../services/eventService';

function EventWorkshopDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [event, setEvent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    const fetchEventDetails = async () => {
      try {
        const data = await eventService.getEventById(id);
        setEvent(data);
        setLoading(false);
      } catch (err) {
        setError('Failed to load event details. Please try again later.');
        setLoading(false);
      }
    };
    
    fetchEventDetails();
  }, [id]);
  
  const handleDelete = async () => {
    if (window.confirm('Are you sure you want to delete this event?')) {
      try {
        await eventService.deleteEvent(id);
        navigate('/user/event-workshop');
      } catch (err) {
        setError('Failed to delete the event. Please try again.');
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
      <div className="text-center">Loading event details...</div>
    </Container>
  );
  
  if (error) return (
    <Container className="py-5">
      <Alert variant="danger">{error}</Alert>
    </Container>
  );
  
  if (!event) return (
    <Container className="py-5">
      <Alert variant="warning">Event not found</Alert>
    </Container>
  );
  
  return (
    <Container className="py-5">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2>{event.eventName}</h2>
        <div>
          <Button 
            variant="secondary" 
            as={Link} 
            to="/user/event-workshop" 
            className="me-2"
          >
            Back to Events
          </Button>
          <Button 
            variant="warning" 
            as={Link} 
            to={`/user/event-workshop/edit/${id}`} 
            className="me-2"
          >
            Edit Event
          </Button>
          <Button 
            variant="danger" 
            onClick={handleDelete}
          >
            Delete Event
          </Button>
        </div>
      </div>
      
      {event.photoUrl && (
        <Card className="shadow-sm mb-4">
          <Card.Body>
            <div className="text-center">
              <Image 
                src={`http://localhost:8080/uploads/${event.photoUrl}`} 
                alt={event.eventName}
                style={{ maxWidth: '100%', maxHeight: '400px', objectFit: 'contain' }}
              />
            </div>
          </Card.Body>
        </Card>
      )}
      
      <Card className="shadow-sm mb-4">
        <Card.Body>
          <Row className="mb-3">
            <Col md={3} className="fw-bold">Organizer:</Col>
            <Col md={9}>{event.organizer}</Col>
          </Row>
          
          <Row className="mb-3">
            <Col md={3} className="fw-bold">Date:</Col>
            <Col md={9}>{formatDate(event.eventDate)}</Col>
          </Row>
          
          <Row className="mb-3">
            <Col md={3} className="fw-bold">Location:</Col>
            <Col md={9}>{event.location}</Col>
          </Row>
          
          <Row className="mb-3">
            <Col md={3} className="fw-bold">Created:</Col>
            <Col md={9}>{formatDate(event.createdAt)}</Col>
          </Row>
          
          {event.updatedAt && event.updatedAt !== event.createdAt && (
            <Row className="mb-3">
              <Col md={3} className="fw-bold">Last Updated:</Col>
              <Col md={9}>{formatDate(event.updatedAt)}</Col>
            </Row>
          )}
        </Card.Body>
      </Card>
      
      <Card className="shadow-sm">
        <Card.Body>
          <h4 className="mb-3">Description</h4>
          <p style={{ whiteSpace: 'pre-wrap' }}>{event.description}</p>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default EventWorkshopDetails;
