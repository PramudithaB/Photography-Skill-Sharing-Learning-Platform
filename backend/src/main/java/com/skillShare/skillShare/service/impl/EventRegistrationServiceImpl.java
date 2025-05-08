package com.skillShare.skillShare.service.impl;

import com.skillShare.skillShare.dto.EventRegistrationDto;
import com.skillShare.skillShare.entity.EventRegistration;
import com.skillShare.skillShare.exception.NotFoundException;
import com.skillShare.skillShare.repository.EventRegistrationRepository;
import com.skillShare.skillShare.service.EventRegistrationService;
import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class EventRegistrationServiceImpl implements EventRegistrationService {

    private final EventRegistrationRepository eventRegistrationRepository;
    private final ModelMapper mapper;

    // Create Event Registration
    @Override
    public EventRegistrationDto createEventRegistration(EventRegistrationDto eventRegistrationDto) {
        EventRegistration eventRegistration = mapper.map(eventRegistrationDto, EventRegistration.class);
        EventRegistration savedEventRegistration = eventRegistrationRepository.save(eventRegistration);
        
        // Debug print to check if ID is generated
        System.out.println("Generated ID: " + savedEventRegistration.getId());
        
        EventRegistrationDto resultDto = mapper.map(savedEventRegistration, EventRegistrationDto.class);
        
        // Explicitly set the ID to ensure it's included in the response
        resultDto.setId(savedEventRegistration.getId());
        
        return resultDto;
    }

    // Get all Event Registrations
    @Override
    public List<EventRegistrationDto> getAllEventRegistrations() {
        List<EventRegistration> eventRegistrationList = eventRegistrationRepository.findAll();
        
        // Debug print to check if entities have IDs
        eventRegistrationList.forEach(registration -> 
            System.out.println("Entity ID: " + registration.getId()));
            
        return eventRegistrationList.stream()
                .map(eventRegistration -> {
                    EventRegistrationDto dto = mapper.map(eventRegistration, EventRegistrationDto.class);
                    // Explicitly set the ID to ensure it's included in the response
                    dto.setId(eventRegistration.getId());
                    return dto;
                })
                .collect(Collectors.toList());
    }

    // Get Event Registration by ID
    @Override
    public EventRegistrationDto getEventRegistrationById(String id) {
        EventRegistration eventRegistration = eventRegistrationRepository.findById(id)
                .orElseThrow(() -> new NotFoundException("Event Registration not found with ID: " + id));
        
        // Debug print to check if entity has ID
        System.out.println("Retrieved entity ID: " + eventRegistration.getId());
        
        EventRegistrationDto dto = mapper.map(eventRegistration, EventRegistrationDto.class);
        
        // Explicitly set the ID to ensure it's included in the response
        dto.setId(eventRegistration.getId());
        
        return dto;
    }

    // Update Event Registration
    @Override
    public EventRegistrationDto updateEventRegistration(String id, EventRegistrationDto eventRegistrationDto) {
        EventRegistration existingEventRegistration = eventRegistrationRepository.findById(id)
                .orElseThrow(() -> new NotFoundException("Event Registration not found with ID: " + id));

        // Preserve the ID before mapping
        String entityId = existingEventRegistration.getId();
        
        // Map DTO to entity
        mapper.map(eventRegistrationDto, existingEventRegistration);
        
        // Explicitly set the ID back to ensure we update the same record
        existingEventRegistration.setId(entityId);

        EventRegistration updatedEventRegistration = eventRegistrationRepository.save(existingEventRegistration);
        
        // Debug print to check if updated entity has ID
        System.out.println("Updated entity ID: " + updatedEventRegistration.getId());
        
        EventRegistrationDto resultDto = mapper.map(updatedEventRegistration, EventRegistrationDto.class);
        
        // Explicitly set the ID to ensure it's included in the response
        resultDto.setId(updatedEventRegistration.getId());
        
        return resultDto;
    }

    // Delete Event Registration
    @Override
    public Boolean deleteEventRegistration(String id) {
        if (!eventRegistrationRepository.existsById(id)) {
            throw new NotFoundException("Event Registration not found with ID: " + id);
        }
        eventRegistrationRepository.deleteById(id);
        return true;
    }
}
