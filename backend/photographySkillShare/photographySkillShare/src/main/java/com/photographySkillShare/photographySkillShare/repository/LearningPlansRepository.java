package com.photographySkillShare.photographySkillShare.repository;

import com.photographySkillShare.photographySkillShare.entity.LearningPlans;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface LearningPlansRepository extends JpaRepository<LearningPlans, Long> {
    // You can define custom queries here if needed
}
