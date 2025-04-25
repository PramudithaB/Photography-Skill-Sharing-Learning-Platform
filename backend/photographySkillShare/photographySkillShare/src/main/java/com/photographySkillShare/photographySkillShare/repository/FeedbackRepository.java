package com.photographySkillShare.photographySkillShare.repository;

import com.photographySkillShare.photographySkillShare.entity.Feedback;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface FeedbackRepository extends JpaRepository<Feedback, Long> {
    // You can define custom queries here if needed
}
