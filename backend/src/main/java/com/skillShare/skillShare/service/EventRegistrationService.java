package com.skillShare.skillShare.service;

import com.skillShare.skillShare.dto.EventRegistrationDto;

import java.util.List;

public interface EventRegistrationService {

    // Create a new Event Registration
    EventRegistrationDto createEventRegistration(EventRegistrationDto eventRegistrationDto);

    // Get all Event Registrations
    List<EventRegistrationDto> getAllEventRegistrations();

    // Get Event Registration by ID
    EventRegistrationDto getEventRegistrationById(String id);

    // Update Event Registration by ID
    EventRegistrationDto updateEventRegistration(String id, EventRegistrationDto eventRegistrationDto);

    // Delete Event Registration by ID
    Boolean deleteEventRegistration(String id);
}
