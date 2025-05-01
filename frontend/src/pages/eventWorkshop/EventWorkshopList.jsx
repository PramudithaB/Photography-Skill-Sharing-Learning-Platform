import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import eventRegistrationService from '../../services/eventRegistrationService';
import './EventWorkshop.css';

const EventWorkshopList = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const data = await eventRegistrationService.getAllEventRegistrations();
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
        await eventRegistrationService.deleteEventRegistration(id);
        setEvents(events.filter(event => event.id !== id));
      } catch (err) {
        setError('Failed to delete event. Please try again.');
      }
    }
  };

  if (loading) return <div className="loading">Loading events...</div>;
  if (error) return <div className="error">{error}</div>;

  return (
    <div className="event-list-container">
      <h2>Photography Events & Workshops</h2>
      <Link to="/event-workshop/create" className="create-btn">Register New Event</Link>
      
      {events.length === 0 ? (
        <p className="no-events">No events available. Be the first to create one!</p>
      ) : (
        <div className="event-cards">
          {events.map(event => (
            <div key={event.id} className="event-card">
              <h3>{event.eventName}</h3>
              <p className="event-date">Date: {event.eventDate}</p>
              <p className="event-location">Location: {event.location}</p>
              <p className="event-organizer">Organizer: {event.organizer}</p>
              <div className="card-footer">
                <Link to={`/event-workshop/${event.id}`} className="view-btn">View Details</Link>
                <Link to={`/event-workshop/edit/${event.id}`} className="edit-btn">Edit</Link>
                <button 
                  onClick={() => handleDelete(event.id)} 
                  className="delete-btn"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default EventWorkshopList;
