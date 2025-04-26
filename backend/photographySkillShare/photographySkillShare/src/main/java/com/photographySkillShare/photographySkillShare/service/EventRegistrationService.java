package com.photographySkillShare.photographySkillShare.service;

import com.photographySkillShare.photographySkillShare.dto.EventRegistrationDto;

import java.util.List;

public interface EventRegistrationService {
    // Create a new EventRegistration
    EventRegistrationDto registerEvent(EventRegistrationDto eventRegistrationDto);

    // Get all EventRegistrations
    List<EventRegistrationDto> getAllEventRegistrations();

    // Get an EventRegistration by ID
    EventRegistrationDto getEventRegistrationById(Long id);

    // Update an EventRegistration by ID
    EventRegistrationDto updateEventRegistration(Long id, EventRegistrationDto eventRegistrationDto);

    // Delete an EventRegistration by ID
    Boolean deleteEventRegistration(Long id);
}
