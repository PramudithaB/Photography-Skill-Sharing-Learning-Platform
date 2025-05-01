import api from './api';

const ENDPOINT = '/event-registration';

const eventRegistrationService = {
  getAllEventRegistrations: async () => {
    try {
      const response = await api.get(`${ENDPOINT}/`);
      return response.data;
    } catch (error) {
      console.error('Error fetching event registrations:', error);
      throw error;
    }
  },

  getEventRegistrationById: async (id) => {
    try {
      const response = await api.get(`${ENDPOINT}/${id}`);
      return response.data;
    } catch (error) {
      console.error(`Error fetching event registration with id ${id}:`, error);
      throw error;
    }
  },

  createEventRegistration: async (eventRegistrationData) => {
    try {
      const response = await api.post(`${ENDPOINT}/create`, eventRegistrationData);
      return response.data;
    } catch (error) {
      console.error('Error creating event registration:', error);
      throw error;
    }
  },

  updateEventRegistration: async (id, eventRegistrationData) => {
    try {
      const response = await api.put(`${ENDPOINT}/${id}`, eventRegistrationData);
      return response.data;
    } catch (error) {
      console.error(`Error updating event registration with id ${id}:`, error);
      throw error;
    }
  },

  deleteEventRegistration: async (id) => {
    try {
      const response = await api.delete(`${ENDPOINT}/${id}`);
      return response.data;
    } catch (error) {
      console.error(`Error deleting event registration with id ${id}:`, error);
      throw error;
    }
  }
};

export default eventRegistrationService;
