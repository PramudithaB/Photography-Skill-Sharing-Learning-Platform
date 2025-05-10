package com.skillShare.skillShare.service.impl;

import com.skillShare.skillShare.dto.EventRegistrationDto;
import com.skillShare.skillShare.dto.FeedbackDto;
import com.skillShare.skillShare.entity.EventRegistration;
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
        // return mapper.map(savedFeedback, FeedbackDto.class);

         // Debug print to check if ID is generated
        System.out.println("Generated ID: " + savedFeedback.getId());
        
        FeedbackDto resultDto = mapper.map(savedFeedback, FeedbackDto.class);
        
        // Explicitly set the ID to ensure it's included in the response
        resultDto.setId(savedFeedback.getId());
        
        return resultDto;
    }

    // Get all Feedback
    @Override
    public List<FeedbackDto> getAllFeedback() {
        List<Feedback> feedbackList = feedbackRepository.findAll();
        // return feedbackList.stream()
        //         .map(feedback -> mapper.map(feedback, FeedbackDto.class))
        //         .collect(Collectors.toList());

        // Debug print to check if entities have IDs
        feedbackList.forEach(registration -> 
            System.out.println("Entity ID: " + registration.getId()));
            
        return feedbackList.stream()
                .map(feedBack -> {
                    FeedbackDto dto = mapper.map(feedBack, FeedbackDto.class);
                    // Explicitly set the ID to ensure it's included in the response
                    dto.setId(feedBack.getId());
                    return dto;
                })
                .collect(Collectors.toList());
    }

    // Get Feedback by ID
    @Override
    public FeedbackDto getFeedbackById(String id) {
        Feedback feedback = feedbackRepository.findById(id)
                .orElseThrow(() -> new NotFoundException("Feedback not found with ID: " + id));
        // return mapper.map(feedback, FeedbackDto.class);
         // Debug print to check if entity has ID
         System.out.println("Retrieved entity ID: " + feedback.getId());
        
         FeedbackDto dto = mapper.map(feedback, FeedbackDto.class);
         
         // Explicitly set the ID to ensure it's included in the response
         dto.setId(feedback.getId());
         
         return dto;
    }

    // Update Feedback
    @Override
    public FeedbackDto updateFeedback(String id, FeedbackDto feedbackDto) {
        Feedback existingFeedback = feedbackRepository.findById(id)
                .orElseThrow(() -> new NotFoundException("Feedback not found with ID: " + id));

        // Preserve the ID before mapping
        String entityId = existingFeedback.getId();
        
        // Map DTO to entity
        mapper.map(feedbackDto, existingFeedback);
        
        // Explicitly set the ID back to ensure we update the same record
        existingFeedback.setId(entityId);

        Feedback updateFeedback = feedbackRepository.save(existingFeedback);
        
        // Debug print to check if updated entity has ID
        System.out.println("Updated entity ID: " + updateFeedback.getId());
        
        FeedbackDto resultDto = mapper.map(updateFeedback, FeedbackDto.class);
        
        // Explicitly set the ID to ensure it's included in the response
        resultDto.setId(updateFeedback.getId());
        
        return resultDto;
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
