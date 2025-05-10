package com.skillShare.skillShare.repository;

import com.skillShare.skillShare.entity.LearningPlan;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface LearningPlanRepository extends MongoRepository<LearningPlan, String> {
}