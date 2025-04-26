package com.photographySkillShare.photographySkillShare.service.Impl;

import com.photographySkillShare.photographySkillShare.dto.EventRegistrationDto;
import com.photographySkillShare.photographySkillShare.entity.EventRegistration;
import com.photographySkillShare.photographySkillShare.exception.NotFoundException;
import com.photographySkillShare.photographySkillShare.repository.EventRegistrationRepository;
import com.photographySkillShare.photographySkillShare.service.EventRegistrationService;
import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class EventRegistrationServiceImpl implements EventRegistrationService {

    private final EventRegistrationRepository eventRegistrationRepository;
    private final ModelMapper mapper;

    // Create EventRegistration
    @Override
    public EventRegistrationDto registerEvent(EventRegistrationDto eventRegistrationDto) {
        EventRegistration eventRegistration = eventRegistrationDto.toEntity(mapper);
        EventRegistration savedEvent = eventRegistrationRepository.save(eventRegistration);
        return savedEvent.toDto(mapper);
    }

    // Get all EventRegistrations
    @Override
    public List<EventRegistrationDto> getAllEventRegistrations() {
        List<EventRegistration> events = eventRegistrationRepository.findAll();
        if (events.isEmpty()) {
            return new ArrayList<>();
        } else {
            return events.stream()
                    .map(event -> event.toDto(mapper))
                    .toList();
        }
    }

    // Get EventRegistration by ID
    @Override
    public EventRegistrationDto getEventRegistrationById(Long id) {
        Optional<EventRegistration> event = eventRegistrationRepository.findById(id);
        if (event.isPresent()) {
            return event.get().toDto(mapper);
        } else {
            throw new NotFoundException("EventRegistration not found with ID: " + id);
        }
    }

    // Update EventRegistration by ID
    @Override
    public EventRegistrationDto updateEventRegistration(Long id, EventRegistrationDto eventRegistrationDto) {
        EventRegistration event = eventRegistrationDto.toEntity(mapper);
        event.setId(id);
        EventRegistration updatedEvent = eventRegistrationRepository.save(event);
        return updatedEvent.toDto(mapper);
    }

    // Delete EventRegistration by ID
    @Override
    public Boolean deleteEventRegistration(Long id) {
        if (!eventRegistrationRepository.existsById(id)) {
            throw new NotFoundException("EventRegistration not found with ID: " + id);
        }
        eventRegistrationRepository.deleteById(id);
        return true;
    }
}
