package com.skillShare.skillShare.service;

import com.skillShare.skillShare.dto.FeedbackDto;

import java.util.List;

public interface FeedbackService {

    // Create a new Feedback
    FeedbackDto createFeedback(FeedbackDto feedbackDto);

    // Get all Feedback
    List<FeedbackDto> getAllFeedback();

    // Get Feedback by ID
    FeedbackDto getFeedbackById(String id);  // ID is now a String in MongoDB

    // Update Feedback by ID
    FeedbackDto updateFeedback(String id, FeedbackDto feedbackDto);  // ID is now a String in MongoDB

    // Delete Feedback by ID
    Boolean deleteFeedback(String id);  // ID is now a String in MongoDB
}
