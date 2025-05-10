import React, { useState, useEffect } from 'react';
import { Container, Form, Button, Alert, Row, Col, Card, Image } from 'react-bootstrap';
import { useParams, useNavigate } from 'react-router-dom';
import eventService from '../services/eventService';

function EventWorkshopEdit() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);
  const [existingPhoto, setExistingPhoto] = useState(null);
  
  const [formData, setFormData] = useState({
    eventName: '',
    description: '',
    organizer: '',
    eventDate: '',
    location: '',
  });

  // Fetch event data when component mounts
  useEffect(() => {
    const fetchEvent = async () => {
      try {
        const eventData = await eventService.getEventById(id);
        setFormData({
          eventName: eventData.eventName || '',
          description: eventData.description || '',
          organizer: eventData.organizer || '',
          eventDate: eventData.eventDate || '',
          location: eventData.location || '',
        });
        
        // Set existing photo if available
        if (eventData.photoUrl) {
          setExistingPhoto(eventData.photoUrl);
        }
        
        setLoading(false);
      } catch (err) {
        setError('Failed to load event details. Please try again.');
        setLoading(false);
      }
    };
    
    fetchEvent();
  }, [id]);

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
      
      // Add updated timestamp
      const now = new Date().toISOString().split('T')[0];
      const eventData = {
        ...formData,
        updatedAt: now
      };
      
      let result;
      if (selectedFile) {
        // Call the API to update the event with a new photo
        result = await eventService.updateEventWithPhoto(id, eventData, selectedFile);
      } else {
        // Call the API to update the event without changing the photo
        result = await eventService.updateEvent(id, eventData);
      }
      
      setSubmitted(true);
      setLoading(false);
      
      // Navigate back after showing success message
      setTimeout(() => {
        navigate(`/user/event-workshop/view/${id}`);
      }, 2000);
    } catch (err) {
      setError('Failed to update event. Please try again.');
      setLoading(false);
    }
  };

  if (loading && !submitted) return (
    <Container className="py-5">
      <div className="text-center">Loading event data...</div>
    </Container>
  );

  return (
    <Container className="py-5">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2>Edit Event</h2>
        <Button 
          variant="secondary" 
          onClick={() => navigate(`/user/event-workshop/view/${id}`)}
        >
          Cancel
        </Button>
      </div>

      {submitted ? (
        <Alert variant="success">
          <Alert.Heading>Event Updated Successfully!</Alert.Heading>
          <p>Your event has been updated. Redirecting to event details...</p>
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
                  
                  {existingPhoto && !previewUrl && (
                    <div className="mb-3">
                      <p className="mb-2">Current Photo:</p>
                      <div style={{ maxWidth: '300px', maxHeight: '200px', overflow: 'hidden' }}>
                        <Image 
                          src={`http://localhost:8080/uploads/${existingPhoto}`} 
                          alt="Current Event Photo" 
                          thumbnail 
                          style={{ width: '100%', objectFit: 'cover' }}
                        />
                      </div>
                    </div>
                  )}
                  
                  <Form.Group className="mb-4">
                    <Form.Label>Update Photo</Form.Label>
                    <Form.Control 
                      type="file" 
                      accept="image/*"
                      onChange={handleFileChange}
                    />
                    <Form.Text className="text-muted">
                      Upload a new image for your event (leave empty to keep current photo)
                    </Form.Text>
                  </Form.Group>
                  
                  {previewUrl && (
                    <div className="mb-4">
                      <p className="mb-2">Preview of new photo:</p>
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
                      onClick={() => navigate(`/user/event-workshop/view/${id}`)}
                      disabled={loading}
                    >
                      Cancel
                    </Button>
                    <Button 
                      variant="primary" 
                      type="submit"
                      disabled={loading}
                    >
                      {loading ? 'Saving...' : 'Save Changes'}
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

export default EventWorkshopEdit;
