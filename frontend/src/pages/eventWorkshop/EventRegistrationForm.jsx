import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import eventRegistrationService from '../../services/eventRegistrationService';
import './EventWorkshop.css';

const EventRegistrationForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [formSubmitted, setFormSubmitted] = useState(false);
  
  const [formData, setFormData] = useState({
    eventName: '',
    description: '',
    organizer: '',
    eventDate: '',
    location: '',
  });

  useEffect(() => {
    // If ID is provided, load the event data for editing
    if (id) {
      const fetchEvent = async () => {
        try {
          setLoading(true);
          const eventData = await eventRegistrationService.getEventRegistrationById(id);
          setFormData({
            eventName: eventData.eventName || '',
            description: eventData.description || '',
            organizer: eventData.organizer || '',
            eventDate: eventData.eventDate || '',
            location: eventData.location || '',
          });
          setLoading(false);
        } catch (err) {
          setError('Failed to load event details. Please try again.');
          setLoading(false);
        }
      };
      fetchEvent();
    }
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      setLoading(true);
      setError(null);
      
      // Get current date for timestamp
      const now = new Date().toISOString().split('T')[0];
      
      const eventData = {
        ...formData,
        createdAt: id ? undefined : now, // Only set createdAt for new events
        updatedAt: now,
      };
      
      if (id) {
        await eventRegistrationService.updateEventRegistration(id, eventData);
      } else {
        await eventRegistrationService.createEventRegistration(eventData);
      }
      
      setLoading(false);
      setFormSubmitted(true);
      
      // Navigate back to events list after a brief delay
      setTimeout(() => {
        navigate('/event-workshop');
      }, 1500);
      
    } catch (err) {
      setError(`Failed to ${id ? 'update' : 'create'} event. Please try again.`);
      setLoading(false);
    }
  };

  if (loading) return <div className="loading">Loading...</div>;
  
  return (
    <div className="form-container">
      <h2>{id ? 'Edit Event' : 'Register New Event'}</h2>
      
      {formSubmitted && (
        <div className="success-message">
          Event successfully {id ? 'updated' : 'registered'}!
        </div>
      )}
      
      {error && <div className="error-message">{error}</div>}
      
      <form onSubmit={handleSubmit} className="event-form">
        <div className="form-group">
          <label htmlFor="eventName">Event Name*</label>
          <input
            type="text"
            id="eventName"
            name="eventName"
            value={formData.eventName}
            onChange={handleChange}
            required
            placeholder="Enter event name"
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="description">Description*</label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            rows="4"
            required
            placeholder="Describe your event"
          ></textarea>
        </div>
        
        <div className="form-group">
          <label htmlFor="organizer">Organizer*</label>
          <input
            type="text"
            id="organizer"
            name="organizer"
            value={formData.organizer}
            onChange={handleChange}
            required
            placeholder="Event organizer name"
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="eventDate">Event Date*</label>
          <input
            type="date"
            id="eventDate"
            name="eventDate"
            value={formData.eventDate}
            onChange={handleChange}
            required
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="location">Location*</label>
          <input
            type="text"
            id="location"
            name="location"
            value={formData.location}
            onChange={handleChange}
            required
            placeholder="Event location"
          />
        </div>
        
        <div className="form-buttons">
          <button 
            type="button" 
            onClick={() => navigate('/event-workshop')}
            className="cancel-btn"
          >
            Cancel
          </button>
          <button 
            type="submit"
            className="submit-btn"
            disabled={loading}
          >
            {loading ? 'Saving...' : (id ? 'Update Event' : 'Register Event')}
          </button>
        </div>
      </form>
    </div>
  );
};

export default EventRegistrationForm;
