import React, { useState, useEffect } from 'react';
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

  // Add validation states
  const [validation, setValidation] = useState({
    eventName: { isValid: true, message: '' },
    description: { isValid: true, message: '' },
    organizer: { isValid: true, message: '' },
    eventDate: { isValid: true, message: '' },
    location: { isValid: true, message: '' },
    photo: { isValid: true, message: '' },
  });

  // Validation functions
  const validateEventName = (name) => {
    if (!name) return { isValid: false, message: 'Event name is required' };
    if (name.length < 3) return { isValid: false, message: 'Event name must be at least 3 characters' };
    return { isValid: true, message: '' };
  };

  const validateDescription = (desc) => {
    if (!desc) return { isValid: false, message: 'Description is required' };
    if (desc.length < 10) return { isValid: false, message: 'Description must be at least 10 characters' };
    return { isValid: true, message: '' };
  };

  const validateOrganizer = (org) => {
    if (!org) return { isValid: false, message: 'Organizer name is required' };
    if (org.length < 2) return { isValid: false, message: 'Organizer name must be at least 2 characters' };
    return { isValid: true, message: '' };
  };

  const validateEventDate = (date) => {
    if (!date) return { isValid: false, message: 'Event date is required' };
    
    const selectedDate = new Date(date);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    if (selectedDate < today) return { isValid: false, message: 'Event date cannot be in the past' };
    return { isValid: true, message: '' };
  };

  const validateLocation = (loc) => {
    if (!loc) return { isValid: false, message: 'Location is required' };
    if (loc.length < 3) return { isValid: false, message: 'Location must be at least 3 characters' };
    return { isValid: true, message: '' };
  };
  
  const validatePhoto = (file) => {
    if (!file) return { isValid: true, message: '' }; // Photo is optional
    
    const allowedTypes = ['image/jpeg', 'image/png', 'image/gif', 'image/webp'];
    if (!allowedTypes.includes(file.type)) {
      return { isValid: false, message: 'Only JPG, PNG, GIF, and WebP images are allowed' };
    }
    
    const maxSize = 5 * 1024 * 1024; // 5 MB
    if (file.size > maxSize) {
      return { isValid: false, message: 'Image size must be less than 5MB' };
    }
    
    return { isValid: true, message: '' };
  };

  // Validate all fields
  const validateForm = () => {
    const validationResults = {
      eventName: validateEventName(formData.eventName),
      description: validateDescription(formData.description),
      organizer: validateOrganizer(formData.organizer),
      eventDate: validateEventDate(formData.eventDate),
      location: validateLocation(formData.location),
      photo: validatePhoto(selectedFile)
    };
    
    setValidation(validationResults);
    
    return Object.values(validationResults).every(field => field.isValid);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
    
    // Validate field on change
    let validationResult;
    switch (name) {
      case 'eventName': 
        validationResult = validateEventName(value);
        break;
      case 'description': 
        validationResult = validateDescription(value);
        break;
      case 'organizer': 
        validationResult = validateOrganizer(value);
        break;
      case 'eventDate': 
        validationResult = validateEventDate(value);
        break;
      case 'location': 
        validationResult = validateLocation(value);
        break;
      default: 
        validationResult = { isValid: true, message: '' };
    }
    
    setValidation(prev => ({
      ...prev,
      [name]: validationResult
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
      
      // Validate file
      const fileValidation = validatePhoto(file);
      setValidation(prev => ({
        ...prev,
        photo: fileValidation
      }));
    } else {
      setSelectedFile(null);
      setPreviewUrl(null);
      setValidation(prev => ({
        ...prev,
        photo: { isValid: true, message: '' }
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validate all fields before submission
    if (!validateForm()) {
      setError('Please fix the validation errors before submitting');
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

  // Reset validation on initial load
  useEffect(() => {
    setValidation({
      eventName: { isValid: true, message: '' },
      description: { isValid: true, message: '' },
      organizer: { isValid: true, message: '' },
      eventDate: { isValid: true, message: '' },
      location: { isValid: true, message: '' },
      photo: { isValid: true, message: '' },
    });
  }, []);

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
                
                <Form onSubmit={handleSubmit} noValidate>
                  <Form.Group className="mb-3">
                    <Form.Label>Event Name *</Form.Label>
                    <Form.Control 
                      type="text" 
                      name="eventName" 
                      value={formData.eventName} 
                      onChange={handleChange} 
                      placeholder="Enter event name"
                      isInvalid={!validation.eventName.isValid}
                      required 
                    />
                    <Form.Control.Feedback type="invalid">
                      {validation.eventName.message}
                    </Form.Control.Feedback>
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
                      isInvalid={!validation.description.isValid}
                      required 
                    />
                    <Form.Control.Feedback type="invalid">
                      {validation.description.message}
                    </Form.Control.Feedback>
                  </Form.Group>
                  
                  <Form.Group className="mb-3">
                    <Form.Label>Organizer *</Form.Label>
                    <Form.Control 
                      type="text" 
                      name="organizer" 
                      value={formData.organizer} 
                      onChange={handleChange} 
                      placeholder="Event organizer name"
                      isInvalid={!validation.organizer.isValid}
                      required 
                    />
                    <Form.Control.Feedback type="invalid">
                      {validation.organizer.message}
                    </Form.Control.Feedback>
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
                          isInvalid={!validation.eventDate.isValid}
                          required 
                        />
                        <Form.Control.Feedback type="invalid">
                          {validation.eventDate.message}
                        </Form.Control.Feedback>
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
                          isInvalid={!validation.location.isValid}
                          required 
                        />
                        <Form.Control.Feedback type="invalid">
                          {validation.location.message}
                        </Form.Control.Feedback>
                      </Form.Group>
                    </Col>
                  </Row>
                  
                  <Form.Group className="mb-4">
                    <Form.Label>Event Photo</Form.Label>
                    <Form.Control 
                      type="file" 
                      accept="image/*"
                      onChange={handleFileChange}
                      isInvalid={!validation.photo.isValid}
                    />
                    <Form.Control.Feedback type="invalid">
                      {validation.photo.message}
                    </Form.Control.Feedback>
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
