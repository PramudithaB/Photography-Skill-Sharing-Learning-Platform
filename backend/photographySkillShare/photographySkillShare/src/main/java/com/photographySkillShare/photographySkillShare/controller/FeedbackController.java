package com.photographySkillShare.photographySkillShare.controller;

import com.photographySkillShare.photographySkillShare.dto.FeedbackDto;
import com.photographySkillShare.photographySkillShare.service.Impl.FeedbackServiceImpl;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/feedback")
@RequiredArgsConstructor
@CrossOrigin
public class FeedbackController {

    private  FeedbackServiceImpl feedbackService;

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
    public ResponseEntity<FeedbackDto> getFeedbackById(@PathVariable Long id) {
        return ResponseEntity.status(HttpStatus.OK).body(feedbackService.getFeedbackById(id));
    }

    // Update Feedback by ID
    @PutMapping("/{id}")
    public ResponseEntity<FeedbackDto> updateFeedback(@PathVariable Long id, @RequestBody FeedbackDto feedbackDto) {
        return ResponseEntity.status(HttpStatus.OK).body(feedbackService.updateFeedback(id, feedbackDto));
    }

    // Delete Feedback by ID
    @DeleteMapping("/{id}")
    public ResponseEntity<Boolean> deleteFeedback(@PathVariable Long id) {
        return ResponseEntity.status(HttpStatus.OK).body(feedbackService.deleteFeedback(id));
    }
}
