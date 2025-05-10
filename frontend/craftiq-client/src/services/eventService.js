import axios from 'axios';

// Base URL for the API endpoints
const API_BASE_URL = 'http://localhost:8080/api/event-registration';

const eventService = {
  // Get all events
  getAllEvents: async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/`);
      return response.data;
    } catch (error) {
      console.error('Error fetching events:', error);
      throw error;
    }
  },

  // Get event by ID
  getEventById: async (id) => {
    try {
      const response = await axios.get(`${API_BASE_URL}/${id}`);
      return response.data;
    } catch (error) {
      console.error(`Error fetching event with ID ${id}:`, error);
      throw error;
    }
  },

  // Create a new event (JSON)
  createEvent: async (eventData) => {
    try {
      const response = await axios.post(`${API_BASE_URL}/create`, eventData);
      return response.data;
    } catch (error) {
      console.error('Error creating event:', error);
      throw error;
    }
  },

  // Create a new event with photo
  createEventWithPhoto: async (eventData, photoFile) => {
    try {
      const formData = new FormData();
      
      // Convert event data to JSON string and add it as a part
      formData.append('event', new Blob([JSON.stringify(eventData)], { type: 'application/json' }));
      
      // Add photo if provided
      if (photoFile) {
        formData.append('photo', photoFile);
      }
      
      const response = await axios.post(`${API_BASE_URL}/create-with-photo`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      
      return response.data;
    } catch (error) {
      console.error('Error creating event with photo:', error);
      throw error;
    }
  },

  // Update an existing event (JSON)
  updateEvent: async (id, eventData) => {
    try {
      const response = await axios.put(`${API_BASE_URL}/${id}`, eventData);
      return response.data;
    } catch (error) {
      console.error(`Error updating event with ID ${id}:`, error);
      throw error;
    }
  },

  // Update an existing event with photo
  updateEventWithPhoto: async (id, eventData, photoFile) => {
    try {
      const formData = new FormData();
      
      // Convert event data to JSON string and add it as a part
      formData.append('event', new Blob([JSON.stringify(eventData)], { type: 'application/json' }));
      
      // Add photo if provided
      if (photoFile) {
        formData.append('photo', photoFile);
      }
      
      const response = await axios.put(`${API_BASE_URL}/${id}/with-photo`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      
      return response.data;
    } catch (error) {
      console.error(`Error updating event with ID ${id} with photo:`, error);
      throw error;
    }
  },

  // Delete an event
  deleteEvent: async (id) => {
    try {
      const response = await axios.delete(`${API_BASE_URL}/${id}`);
      return response.data;
    } catch (error) {
      console.error(`Error deleting event with ID ${id}:`, error);
      throw error;
    }
  }
};

export default eventService;
