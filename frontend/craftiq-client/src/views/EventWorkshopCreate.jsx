import React, { useState } from 'react';
import { Container, Form, Button, Alert, Row, Col, Card, Image } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import eventService from '../services/eventService';

function EventWorkshopCreate() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);
  
  const [formData, setFormData] = useState({
    eventName: '',
    description: '',
    organizer: '',
    eventDate: '',
    location: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewUrl(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.eventName || !formData.description || !formData.organizer || !formData.eventDate || !formData.location) {
      setError('Please fill in all required fields');
      return;
    }
    
    try {
      setLoading(true);
      setError(null);
      
      // Add timestamps to the event data
      const now = new Date().toISOString().split('T')[0];
      const eventData = {
        ...formData,
        createdAt: now,
        updatedAt: now
      };
      
      let result;
      if (selectedFile) {
        // Call the API to create the event with photo
        result = await eventService.createEventWithPhoto(eventData, selectedFile);
      } else {
        // Call the API to create the event without photo
        result = await eventService.createEvent(eventData);
      }
      
      setSubmitted(true);
      setLoading(false);
      
      // Navigate back after showing success message
      setTimeout(() => {
        navigate('/user/event-workshop');
      }, 2000);
    } catch (err) {
      setError('Failed to create event. Please try again.');
      setLoading(false);
    }
  };

  return (
    <Container className="py-5">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2>Create New Event</h2>
        <Button 
          variant="secondary" 
          onClick={() => navigate('/user/event-workshop')}
        >
          Back to Events
        </Button>
      </div>

      {submitted ? (
        <Alert variant="success">
          <Alert.Heading>Event Created Successfully!</Alert.Heading>
          <p>Your event has been created. Redirecting to events list...</p>
        </Alert>
      ) : (
        <Row>
          <Col md={8} className="mx-auto">
            <Card className="shadow-sm">
              <Card.Body>
                {error && <Alert variant="danger">{error}</Alert>}
                
                <Form onSubmit={handleSubmit}>
                  <Form.Group className="mb-3">
                    <Form.Label>Event Name *</Form.Label>
                    <Form.Control 
                      type="text" 
                      name="eventName" 
                      value={formData.eventName} 
                      onChange={handleChange} 
                      placeholder="Enter event name"
                      required 
                    />
                  </Form.Group>
                  
                  <Form.Group className="mb-3">
                    <Form.Label>Description *</Form.Label>
                    <Form.Control 
                      as="textarea" 
                      name="description" 
                      value={formData.description} 
                      onChange={handleChange} 
                      placeholder="Describe your event"
                      rows={4}
                      required 
                    />
                  </Form.Group>
                  
                  <Form.Group className="mb-3">
                    <Form.Label>Organizer *</Form.Label>
                    <Form.Control 
                      type="text" 
                      name="organizer" 
                      value={formData.organizer} 
                      onChange={handleChange} 
                      placeholder="Event organizer name"
                      required 
                    />
                  </Form.Group>
                  
                  <Row>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label>Event Date *</Form.Label>
                        <Form.Control 
                          type="date" 
                          name="eventDate" 
                          value={formData.eventDate} 
                          onChange={handleChange} 
                          required 
                        />
                      </Form.Group>
                    </Col>
                    
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label>Location *</Form.Label>
                        <Form.Control 
                          type="text" 
                          name="location" 
                          value={formData.location} 
                          onChange={handleChange} 
                          placeholder="Event location"
                          required 
                        />
                      </Form.Group>
                    </Col>
                  </Row>
                  
                  <Form.Group className="mb-4">
                    <Form.Label>Event Photo</Form.Label>
                    <Form.Control 
                      type="file" 
                      accept="image/*"
                      onChange={handleFileChange}
                    />
                    <Form.Text className="text-muted">
                      Upload an image for your event (optional)
                    </Form.Text>
                  </Form.Group>
                  
                  {previewUrl && (
                    <div className="mb-4">
                      <p className="mb-2">Preview:</p>
                      <div style={{ maxWidth: '300px', maxHeight: '200px', overflow: 'hidden' }}>
                        <Image 
                          src={previewUrl} 
                          alt="Preview" 
                          thumbnail 
                          style={{ width: '100%', objectFit: 'cover' }}
                        />
                      </div>
                    </div>
                  )}
                  
                  <div className="d-flex justify-content-end mt-4">
                    <Button 
                      variant="secondary" 
                      className="me-2"
                      onClick={() => navigate('/user/event-workshop')}
                      disabled={loading}
                    >
                      Cancel
                    </Button>
                    <Button 
                      variant="primary" 
                      type="submit"
                      disabled={loading}
                    >
                      {loading ? 'Creating...' : 'Create Event'}
                    </Button>
                  </div>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      )}
    </Container>
  );
}

export default EventWorkshopCreate;
