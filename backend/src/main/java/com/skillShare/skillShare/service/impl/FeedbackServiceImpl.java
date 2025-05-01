package com.skillShare.skillShare.service.impl;

import com.skillShare.skillShare.dto.FeedbackDto;
import com.skillShare.skillShare.entity.Feedback;
import com.skillShare.skillShare.exception.NotFoundException;
import com.skillShare.skillShare.repository.FeedbackRepository;
import com.skillShare.skillShare.service.FeedbackService;
import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class FeedbackServiceImpl implements FeedbackService {

    private final FeedbackRepository feedbackRepository;
    private final ModelMapper mapper;

    // Create Feedback
    @Override
    public FeedbackDto createFeedback(FeedbackDto feedbackDto) {
        Feedback feedback = mapper.map(feedbackDto, Feedback.class);
        Feedback savedFeedback = feedbackRepository.save(feedback); // MongoDB save method
        return mapper.map(savedFeedback, FeedbackDto.class);
    }

    // Get all Feedback
    @Override
    public List<FeedbackDto> getAllFeedback() {
        List<Feedback> feedbackList = feedbackRepository.findAll(); // MongoDB findAll method
        return feedbackList.stream()
                .map(feedback -> mapper.map(feedback, FeedbackDto.class))
                .collect(Collectors.toList());
    }

    // Get Feedback by ID
    @Override
    public FeedbackDto getFeedbackById(String id) { // Change id type to String for MongoDB
        Feedback feedback = feedbackRepository.findById(id)
                .orElseThrow(() -> new NotFoundException("Feedback not found with ID: " + id));
        return mapper.map(feedback, FeedbackDto.class);
    }

    // Update Feedback
    @Override
    public FeedbackDto updateFeedback(String id, FeedbackDto feedbackDto) { // Change id type to String for MongoDB
        Feedback existingFeedback = feedbackRepository.findById(id)
                .orElseThrow(() -> new NotFoundException("Feedback not found with ID: " + id));

        // Set other fields if applicable...
        mapper.map(feedbackDto, existingFeedback); // Map updated fields

        Feedback updatedFeedback = feedbackRepository.save(existingFeedback); // MongoDB save method
        return mapper.map(updatedFeedback, FeedbackDto.class);
    }

    // Delete Feedback
    @Override
    public Boolean deleteFeedback(String id) { // Change id type to String for MongoDB
        if (!feedbackRepository.existsById(id)) {
            throw new NotFoundException("Feedback not found with ID: " + id);
        }
        feedbackRepository.deleteById(id); // MongoDB delete method
        return true;
    }
}
