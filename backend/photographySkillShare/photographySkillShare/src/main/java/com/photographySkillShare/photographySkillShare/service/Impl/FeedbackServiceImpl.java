package com.photographySkillShare.photographySkillShare.service.Impl;

import com.photographySkillShare.photographySkillShare.dto.FeedbackDto;
import com.photographySkillShare.photographySkillShare.entity.Feedback;
import com.photographySkillShare.photographySkillShare.exception.NotFoundException;
import com.photographySkillShare.photographySkillShare.repository.FeedbackRepository;
import com.photographySkillShare.photographySkillShare.service.FeedbackService;
import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class FeedbackServiceImpl implements FeedbackService {

    private  FeedbackRepository feedbackRepository;
    private  ModelMapper mapper;

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
        if (feedbackList.isEmpty()) {
            return new ArrayList<>();
        } else {
            return feedbackList.stream()
                    .map(feedback -> mapper.map(feedback, FeedbackDto.class))
                    .toList();
        }
    }

    // Get Feedback by ID
    @Override
    public FeedbackDto getFeedbackById(Long id) {
        Optional<Feedback> feedback = feedbackRepository.findById(id);
        if (feedback.isPresent()) {
            return mapper.map(feedback.get(), FeedbackDto.class);
        } else {
            throw new NotFoundException("Feedback not found with ID: " + id);
        }
    }

    // Update Feedback
    @Override
    public FeedbackDto updateFeedback(Long id, FeedbackDto feedbackDto) {
        Feedback feedback = mapper.map(feedbackDto, Feedback.class);
        feedback.setId(id);
        Feedback updatedFeedback = feedbackRepository.save(feedback);
        return mapper.map(updatedFeedback, FeedbackDto.class);
    }

    // Delete Feedback
    @Override
    public Boolean deleteFeedback(Long id) {
        if (!feedbackRepository.existsById(id)) {
            throw new NotFoundException("Feedback not found with ID: " + id);
        }
        feedbackRepository.deleteById(id);
        return true;
    }
}
