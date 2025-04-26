package com.photographySkillShare.photographySkillShare.service;

import com.photographySkillShare.photographySkillShare.dto.LearningPlansDto;

import java.util.List;

public interface LearningPlansService {
    // Create a new LearningPlan
    public LearningPlansDto postLearningPlan(LearningPlansDto learningPlansDto);

    // Get all LearningPlans
    public List<LearningPlansDto> getAllLearningPlans();

    // Get a LearningPlan by ID
    public LearningPlansDto getLearningPlanById(Long id);

    // Update a LearningPlan by ID
    public LearningPlansDto updateLearningPlan(Long id, LearningPlansDto learningPlansDto);

    // Delete a LearningPlan by ID
    public Boolean deleteLearningPlan(Long id);
}
