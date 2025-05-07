package com.skillShare.skillShare.service.impl;

import com.skillShare.skillShare.dto.FeedbackDto;
import com.skillShare.skillShare.entity.Feedback;
import com.skillShare.skillShare.exception.NotFoundException;
import com.skillShare.skillShare.repository.FeedbackRepository;
import com.skillShare.skillShare.service.FeedbackService;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class FeedbackServiceImpl implements FeedbackService {

    private final FeedbackRepository feedbackRepository;
    private final ModelMapper mapper;

    public FeedbackServiceImpl(FeedbackRepository feedbackRepository, ModelMapper mapper) {
        this.feedbackRepository = feedbackRepository;
        this.mapper = mapper;

        // Prevent overwriting the ID field during mapping
        this.mapper.getConfiguration().setPropertyCondition(context ->
            !"id".equals(context.getMapping().getLastDestinationProperty().getName())
        );
    }

    // Create Feedback
    @Override
    public FeedbackDto createFeedback(FeedbackDto feedbackDto) {
        Feedback feedback = mapper.map(feedbackDto, Feedback.class);
        Feedback savedFeedback = feedbackRepository.save(feedback);
        return mapper.map(savedFeedback, FeedbackDto.class);
    }

    // Get all Feedback
    @Override
    public List<FeedbackDto> getAllFeedback() {
        List<Feedback> feedbackList = feedbackRepository.findAll();
        return feedbackList.stream()
                .map(feedback -> mapper.map(feedback, FeedbackDto.class))
                .collect(Collectors.toList());
    }

    // Get Feedback by ID
    @Override
    public FeedbackDto getFeedbackById(String id) {
        Feedback feedback = feedbackRepository.findById(id)
                .orElseThrow(() -> new NotFoundException("Feedback not found with ID: " + id));
        return mapper.map(feedback, FeedbackDto.class);
    }

    // Update Feedback
    @Override
    public FeedbackDto updateFeedback(String id, FeedbackDto feedbackDto) {
        Feedback existingFeedback = feedbackRepository.findById(id)
                .orElseThrow(() -> new NotFoundException("Feedback not found with ID: " + id));

        // Map fields from DTO to entity
        mapper.map(feedbackDto, existingFeedback);

        // Ensure ID is not changed
        existingFeedback.setId(id);

        Feedback updatedFeedback = feedbackRepository.save(existingFeedback);
        return mapper.map(updatedFeedback, FeedbackDto.class);
    }

    // Delete Feedback
    @Override
    public Boolean deleteFeedback(String id) {
        if (!feedbackRepository.existsById(id)) {
            throw new NotFoundException("Feedback not found with ID: " + id);
        }
        feedbackRepository.deleteById(id);
        return true;
    }
}
