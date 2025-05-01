package com.skillShare.skillShare.controller;

import com.skillShare.skillShare.dto.FeedbackDto;
import com.skillShare.skillShare.service.impl.FeedbackServiceImpl;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RequiredArgsConstructor
@RestController
@RequestMapping("api/feedback")
@CrossOrigin

public class FeedbackController {

    private final FeedbackServiceImpl feedbackService;

    // Create Feedback
    @PostMapping("/create")
    public ResponseEntity<FeedbackDto> createFeedback(@RequestBody FeedbackDto feedbackDto) {
        return ResponseEntity.status(HttpStatus.CREATED).body(feedbackService.createFeedback(feedbackDto));
    }

    // Get all Feedback
    @GetMapping("/")
    public ResponseEntity<List<FeedbackDto>> getAllFeedback() {
        return ResponseEntity.status(HttpStatus.OK).body(feedbackService.getAllFeedback());
    }

    // Get Feedback by ID
    @GetMapping("/{id}")
    public ResponseEntity<FeedbackDto> getFeedbackById(@PathVariable String id) {  // ID is now String in MongoDB
        return ResponseEntity.status(HttpStatus.OK).body(feedbackService.getFeedbackById(id));
    }

    // Update Feedback by ID
    @PutMapping("/{id}")
    public ResponseEntity<FeedbackDto> updateFeedback(@PathVariable String id, @RequestBody FeedbackDto feedbackDto) {  // ID is now String in MongoDB
        return ResponseEntity.status(HttpStatus.OK).body(feedbackService.updateFeedback(id, feedbackDto));
    }

    // Delete Feedback by ID
    @DeleteMapping("/{id}")
    public ResponseEntity<Boolean> deleteFeedback(@PathVariable String id) {  // ID is now String in MongoDB
        return ResponseEntity.status(HttpStatus.OK).body(feedbackService.deleteFeedback(id));
    }
}
