package com.photographySkillShare.photographySkillShare.repository;

import com.photographySkillShare.photographySkillShare.entity.EventRegistration;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface EventRegistrationRepository extends JpaRepository<EventRegistration, Long> {
    // You can define custom queries here if needed
}
