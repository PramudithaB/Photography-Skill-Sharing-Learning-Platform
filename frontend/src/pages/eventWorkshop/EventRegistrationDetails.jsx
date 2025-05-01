import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import eventRegistrationService from '../../services/eventRegistrationService';
import './EventWorkshop.css';

const EventRegistrationDetails = () => {
  const { id } = useParams();
  const [event, setEvent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEventDetails = async () => {
      try {
        const data = await eventRegistrationService.getEventRegistrationById(id);
        setEvent(data);
        setLoading(false);
      } catch (err) {
        setError('Failed to load event details. Please try again later.');
        setLoading(false);
      }
    };

    fetchEventDetails();
  }, [id]);

  if (loading) return <div className="loading">Loading event details...</div>;
  if (error) return <div className="error">{error}</div>;
  if (!event) return <div className="error">Event not found</div>;

  return (
    <div className="event-details-container">
      <div className="details-header">
        <h2>{event.eventName}</h2>
        <div className="action-buttons">
          <Link to={`/event-workshop/edit/${event.id}`} className="edit-btn">Edit</Link>
          <Link to="/event-workshop" className="back-btn">Back to Events</Link>
        </div>
      </div>
      
      <div className="event-details-card">
        <div className="details-row">
          <span className="label">Organizer:</span>
          <span className="value">{event.organizer}</span>
        </div>
        
        <div className="details-row">
          <span className="label">Date:</span>
          <span className="value">{event.eventDate}</span>
        </div>
        
        <div className="details-row">
          <span className="label">Location:</span>
          <span className="value">{event.location}</span>
        </div>
        
        <div className="details-row">
          <span className="label">Created:</span>
          <span className="value">{event.createdAt}</span>
        </div>
        
        {event.updatedAt && event.updatedAt !== event.createdAt && (
          <div className="details-row">
            <span className="label">Last Updated:</span>
            <span className="value">{event.updatedAt}</span>
          </div>
        )}
      </div>
      
      <div className="description-section">
        <h3>Description</h3>
        <p>{event.description}</p>
      </div>
    </div>
  );
};

export default EventRegistrationDetails;
