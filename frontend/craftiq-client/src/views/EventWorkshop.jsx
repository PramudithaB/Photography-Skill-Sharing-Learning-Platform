import React, { useState, useEffect } from 'react';
import { Card, Button, Container, Row, Col, Alert, Image, Form, InputGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import eventService from '../services/eventService';

function EventWorkshop() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

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

  // Filter events based on search query
  const filteredEvents = events.filter(event => {
    const query = searchQuery.toLowerCase();
    return (
      event.eventName.toLowerCase().includes(query) ||
      event.organizer.toLowerCase().includes(query) ||
      event.location.toLowerCase().includes(query) ||
      event.description.toLowerCase().includes(query)
    );
  });

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
      
      {/* Search Bar */}
      <div className="mb-4">
        <InputGroup>
          <Form.Control
            placeholder="Search events by name, organizer, location..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            style={{
              borderRadius: '8px 0 0 8px',
              padding: '12px',
              boxShadow: '0 2px 4px rgba(0,0,0,0.05)'
            }}
          />
          <Button 
            variant="outline-primary"
            style={{
              borderRadius: '0 8px 8px 0',
              padding: '0 15px',
              boxShadow: '0 2px 4px rgba(0,0,0,0.05)'
            }}
          >
            Search
          </Button>
        </InputGroup>
      </div>
      
      {filteredEvents.length === 0 ? (
        <Alert variant="info">
          {searchQuery 
            ? "No events match your search criteria. Try different keywords." 
            : "No events found. Create your first event!"}
        </Alert>
      ) : (
        <Row>
          {filteredEvents.map(event => (
            <Col md={6} lg={4} className="mb-4" key={event.id}>
              <Card className="h-100" style={{
                borderRadius: '12px',
                border: 'none',
                boxShadow: '0 6px 18px rgba(0,0,0,0.1)',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                overflow: 'hidden'
              }} 
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)';
                e.currentTarget.style.boxShadow = '0 12px 24px rgba(0,0,0,0.15)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 6px 18px rgba(0,0,0,0.1)';
              }}>
                {event.photoUrl && (
                  <div style={{ height: '180px', overflow: 'hidden' }}>
                    <Image 
                      src={`http://localhost:8080/uploads/${event.photoUrl}`}
                      alt={event.eventName}
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                  </div>
                )}
                
                <Card.Body style={{ padding: '1.5rem' }}>
                  <Card.Title style={{ 
                    fontSize: '1.4rem', 
                    fontWeight: '600',
                    color: '#2c3e50',
                    marginBottom: '1rem'
                  }}>{event.eventName}</Card.Title>
                  <Card.Text as="div" style={{ color: '#555' }}>
                    <div style={{ 
                      marginBottom: '0.75rem',
                      display: 'flex',
                      alignItems: 'center' 
                    }}>
                      <span style={{ 
                        backgroundColor: '#e9f7fe', 
                        padding: '4px 8px', 
                        borderRadius: '4px',
                        marginRight: '8px',
                        color: '#3498db',
                        fontWeight: '500',
                        fontSize: '0.85rem'
                      }}>Organizer</span>
                      <span>{event.organizer}</span>
                    </div>
                    <div style={{ 
                      marginBottom: '0.75rem',
                      display: 'flex',
                      alignItems: 'center'
                    }}>
                      <span style={{ 
                        backgroundColor: '#f0f8e6', 
                        padding: '4px 8px', 
                        borderRadius: '4px',
                        marginRight: '8px',
                        color: '#27ae60',
                        fontWeight: '500',
                        fontSize: '0.85rem'
                      }}>Date</span>
                      <span>{formatDate(event.eventDate)}</span>
                    </div>
                    <div style={{ 
                      marginBottom: '0.75rem',
                      display: 'flex',
                      alignItems: 'center'
                    }}>
                      <span style={{ 
                        backgroundColor: '#fef5e7', 
                        padding: '4px 8px', 
                        borderRadius: '4px',
                        marginRight: '8px',
                        color: '#e67e22',
                        fontWeight: '500',
                        fontSize: '0.85rem'
                      }}>Location</span>
                      <span>{event.location}</span>
                    </div>
                    <div style={{ 
                      marginTop: '1.25rem',
                      padding: '12px',
                      backgroundColor: '#f9f9f9',
                      borderRadius: '8px',
                      fontSize: '0.95rem',
                      height: '80px',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                      display: '-webkit-box',
                      WebkitLineClamp: '3',
                      WebkitBoxOrient: 'vertical'
                    }}>
                      {event.description}
                    </div>
                  </Card.Text>
                </Card.Body>
                <Card.Footer style={{ 
                  backgroundColor: 'white',
                  borderTop: '1px solid rgba(0,0,0,0.05)',
                  padding: '1.25rem 1.5rem'
                }}>
                  <div className="d-flex ">
                    <div>
                      <Button 
                        variant="primary" 
                        size="sm"
                        as={Link}
                        to={`/user/event-workshop/view/${event.id}`}
                        style={{
                          backgroundColor: '#3498db',
                          borderColor: '#3498db',
                          borderRadius: '6px',
                          boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                          padding: '0.5rem 1rem',
                          fontWeight: '500',
                          transition: 'all 0.2s ease',
                          marginRight: '10px',
                          textBox: 'auto',
                        }}
                        onMouseOver={(e) => {
                          e.currentTarget.style.backgroundColor = '#2980b9';
                          e.currentTarget.style.borderColor = '#2980b9';
                          e.currentTarget.style.boxShadow = '0 4px 8px rgba(0,0,0,0.15)';
                        }}
                        onMouseOut={(e) => {
                          e.currentTarget.style.backgroundColor = '#3498db';
                          e.currentTarget.style.borderColor = '#3498db';
                          e.currentTarget.style.boxShadow = '0 2px 4px rgba(0,0,0,0.1)';
                        }}
                      >
                        View Details
                      </Button>
                    </div>
                    <div>
                      <Button 
                        variant="warning" 
                        size="sm"
                        as={Link}
                        to={`/user/event-workshop/edit/${event.id}`}
                        className="me-2"
                        style={{
                          backgroundColor: '#f1c40f',
                          borderColor: '#f1c40f',
                          borderRadius: '6px',
                          boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                          padding: '0.5rem 1rem',
                          fontWeight: '500',
                          transition: 'all 0.2s ease',
                          marginRight: '10px',
                          textBox: 'auto',
                        }}
                        onMouseOver={(e) => {
                          e.currentTarget.style.backgroundColor = '#f39c12';
                          e.currentTarget.style.borderColor = '#f39c12';
                          e.currentTarget.style.boxShadow = '0 4px 8px rgba(0,0,0,0.15)';
                        }}
                        onMouseOut={(e) => {
                          e.currentTarget.style.backgroundColor = '#f1c40f';
                          e.currentTarget.style.borderColor = '#f1c40f';
                          e.currentTarget.style.boxShadow = '0 2px 4px rgba(0,0,0,0.1)';
                        }}
                      >
                        Edit
                      </Button>
                      <Button 
                        variant="danger" 
                        size="sm"
                        onClick={() => handleDelete(event.id)}
                        style={{
                          backgroundColor: '#e74c3c',
                          borderColor: '#e74c3c',
                          borderRadius: '6px',
                          boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                          padding: '0.5rem 1rem',
                          fontWeight: '500',
                          transition: 'all 0.2s ease',
                          marginRight: '10px',
                          textBox: 'auto',
                        }}
                        onMouseOver={(e) => {
                          e.currentTarget.style.backgroundColor = '#c0392b';
                          e.currentTarget.style.borderColor = '#c0392b';
                          e.currentTarget.style.boxShadow = '0 4px 8px rgba(0,0,0,0.15)';
                        }}
                        onMouseOut={(e) => {
                          e.currentTarget.style.backgroundColor = '#e74c3c';
                          e.currentTarget.style.borderColor = '#e74c3c';
                          e.currentTarget.style.boxShadow = '0 2px 4px rgba(0,0,0,0.1)';
                        }}
                      >
                        Delete
                      </Button>
                    </div>
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
