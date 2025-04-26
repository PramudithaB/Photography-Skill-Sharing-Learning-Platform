package com.photographySkillShare.photographySkillShare.controller;

import com.photographySkillShare.photographySkillShare.dto.EventRegistrationDto;
import com.photographySkillShare.photographySkillShare.service.EventRegistrationService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/eventregistration")
@RequiredArgsConstructor
@CrossOrigin
public class EventRegistrationController {

    private final EventRegistrationService eventRegistrationService;

    // Create EventRegistration
    @PostMapping("/create")
    public ResponseEntity<EventRegistrationDto> registerEvent(@RequestBody EventRegistrationDto eventRegistrationDto) {
        return ResponseEntity.status(HttpStatus.CREATED).body(eventRegistrationService.registerEvent(eventRegistrationDto));
    }

    // Get all EventRegistrations
    @GetMapping("/")
    public ResponseEntity<List<EventRegistrationDto>> getAllEventRegistrations() {
        return ResponseEntity.status(HttpStatus.OK).body(eventRegistrationService.getAllEventRegistrations());
    }

    // Get EventRegistration by ID
    @GetMapping("/{id}")
    public ResponseEntity<EventRegistrationDto> getEventRegistrationById(@PathVariable Long id) {
        return ResponseEntity.status(HttpStatus.OK).body(eventRegistrationService.getEventRegistrationById(id));
    }

    // Update EventRegistration by ID
    @PutMapping("/{id}")
    public ResponseEntity<EventRegistrationDto> updateEventRegistration(@PathVariable Long id, @RequestBody EventRegistrationDto eventRegistrationDto) {
        return ResponseEntity.status(HttpStatus.OK).body(eventRegistrationService.updateEventRegistration(id, eventRegistrationDto));
    }

    // Delete EventRegistration by ID
    @DeleteMapping("/{id}")
    public ResponseEntity<Boolean> deleteEventRegistration(@PathVariable Long id) {
        return ResponseEntity.status(HttpStatus.OK).body(eventRegistrationService.deleteEventRegistration(id));
    }
}