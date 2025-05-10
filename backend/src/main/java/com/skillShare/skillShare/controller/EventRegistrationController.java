package com.skillShare.skillShare.controller;

import com.skillShare.skillShare.dto.EventRegistrationDto;
import com.skillShare.skillShare.service.FileStorageService;
import com.skillShare.skillShare.service.impl.EventRegistrationServiceImpl;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

@RequiredArgsConstructor
@RestController
@RequestMapping("api/event-registration")
@CrossOrigin
public class EventRegistrationController {

    private final EventRegistrationServiceImpl eventRegistrationService;
    private final FileStorageService fileStorageService;

    // Create Event Registration with JSON (no photo)
    @PostMapping(value = "/create", consumes = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<EventRegistrationDto> createEventRegistrationJson(@RequestBody EventRegistrationDto eventRegistrationDto) {
        return ResponseEntity.status(HttpStatus.CREATED).body(eventRegistrationService.createEventRegistration(eventRegistrationDto));
    }

    // Create Event Registration with photo
    @PostMapping(value = "/create-with-photo", consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    public ResponseEntity<EventRegistrationDto> createEventRegistrationWithPhoto(
            @RequestPart("event") EventRegistrationDto eventRegistrationDto,
            @RequestPart(value = "photo", required = false) MultipartFile photo) {
        
        if (photo != null && !photo.isEmpty()) {
            String photoUrl = fileStorageService.storeFile(photo);
            eventRegistrationDto.setPhotoUrl(photoUrl);
        }
        
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

    // Update Event Registration by ID with JSON (no photo)
    @PutMapping(value = "/{id}", consumes = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<EventRegistrationDto> updateEventRegistrationJson(
            @PathVariable String id, 
            @RequestBody EventRegistrationDto eventRegistrationDto) {
        
        // Get current event data to preserve photo if not explicitly changed
        EventRegistrationDto existingEvent = eventRegistrationService.getEventRegistrationById(id);
        
        // If no new photo URL is provided, keep the existing one
        if (eventRegistrationDto.getPhotoUrl() == null || eventRegistrationDto.getPhotoUrl().isEmpty()) {
            eventRegistrationDto.setPhotoUrl(existingEvent.getPhotoUrl());
        }
        
        return ResponseEntity.status(HttpStatus.OK).body(eventRegistrationService.updateEventRegistration(id, eventRegistrationDto));
    }

    // Update Event Registration by ID with photo
    @PutMapping(value = "/{id}/with-photo", consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    public ResponseEntity<EventRegistrationDto> updateEventRegistrationWithPhoto(
            @PathVariable String id,
            @RequestPart("event") EventRegistrationDto eventRegistrationDto,
            @RequestPart(value = "photo", required = false) MultipartFile photo) {
        
        // Get current event data to preserve photo if no new photo is uploaded
        EventRegistrationDto existingEvent = eventRegistrationService.getEventRegistrationById(id);
        
        if (photo != null && !photo.isEmpty()) {
            // Only update photo if a new one is provided
            String photoUrl = fileStorageService.storeFile(photo);
            eventRegistrationDto.setPhotoUrl(photoUrl);
        } else {
            // Keep the existing photo URL if no new photo is provided
            eventRegistrationDto.setPhotoUrl(existingEvent.getPhotoUrl());
        }
        
        return ResponseEntity.status(HttpStatus.OK).body(eventRegistrationService.updateEventRegistration(id, eventRegistrationDto));
    }

    // Delete Event Registration by ID
    @DeleteMapping("/{id}")
    public ResponseEntity<Boolean> deleteEventRegistration(@PathVariable String id) {
        return ResponseEntity.status(HttpStatus.OK).body(eventRegistrationService.deleteEventRegistration(id));
    }
}
