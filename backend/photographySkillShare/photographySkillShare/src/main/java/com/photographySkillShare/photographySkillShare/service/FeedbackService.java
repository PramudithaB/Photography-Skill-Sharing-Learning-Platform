package com.photographySkillShare.photographySkillShare.service;

import com.photographySkillShare.photographySkillShare.dto.FeedbackDto;

import java.util.List;

public interface FeedbackService {

    // Create a new Feedback
    FeedbackDto createFeedback(FeedbackDto feedbackDto);

    // Get all Feedback
    List<FeedbackDto> getAllFeedback();

    // Get Feedback by ID
    FeedbackDto getFeedbackById(Long id);

    // Update Feedback by ID
    FeedbackDto updateFeedback(Long id, FeedbackDto feedbackDto);

    // Delete Feedback by ID
    Boolean deleteFeedback(Long id);
}
