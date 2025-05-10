package com.skillShare.skillShare.service;

import com.skillShare.skillShare.dto.LearningPlanDto;
import java.util.List;

public interface LearningPlanService {
    LearningPlanDto createLearningPlan(LearningPlanDto learningPlanDto);
    List<LearningPlanDto> getAllLearningPlans();
    LearningPlanDto getLearningPlanById(String id);
    LearningPlanDto updateLearningPlan(String id, LearningPlanDto learningPlanDto);
    Boolean deleteLearningPlan(String id);
}