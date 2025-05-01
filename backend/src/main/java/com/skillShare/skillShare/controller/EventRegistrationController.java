package com.skillShare.skillShare.controller;

import com.skillShare.skillShare.dto.EventRegistrationDto;
import com.skillShare.skillShare.service.impl.EventRegistrationServiceImpl;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RequiredArgsConstructor
@RestController
@RequestMapping("api/event-registration")
@CrossOrigin
public class EventRegistrationController {

    private final EventRegistrationServiceImpl eventRegistrationService;

    // Create Event Registration
    @PostMapping("/create")
    public ResponseEntity<EventRegistrationDto> createEventRegistration(@RequestBody EventRegistrationDto eventRegistrationDto) {
        return ResponseEntity.status(HttpStatus.CREATED).body(eventRegistrationService.createEventRegistration(eventRegistrationDto));
    }

    // Get all Event Registrations
    @GetMapping("/")
    public ResponseEntity<List<EventRegistrationDto>> getAllEventRegistrations() {
        return ResponseEntity.status(HttpStatus.OK).body(eventRegistrationService.getAllEventRegistrations());
    }

    // Get Event Registration by ID
    @GetMapping("/{id}")
    public ResponseEntity<EventRegistrationDto> getEventRegistrationById(@PathVariable String id) {
        return ResponseEntity.status(HttpStatus.OK).body(eventRegistrationService.getEventRegistrationById(id));
    }

    // Update Event Registration by ID
    @PutMapping("/{id}")
    public ResponseEntity<EventRegistrationDto> updateEventRegistration(@PathVariable String id, @RequestBody EventRegistrationDto eventRegistrationDto) {
        return ResponseEntity.status(HttpStatus.OK).body(eventRegistrationService.updateEventRegistration(id, eventRegistrationDto));
    }

    // Delete Event Registration by ID
    @DeleteMapping("/{id}")
    public ResponseEntity<Boolean> deleteEventRegistration(@PathVariable String id) {
        return ResponseEntity.status(HttpStatus.OK).body(eventRegistrationService.deleteEventRegistration(id));
    }
}
