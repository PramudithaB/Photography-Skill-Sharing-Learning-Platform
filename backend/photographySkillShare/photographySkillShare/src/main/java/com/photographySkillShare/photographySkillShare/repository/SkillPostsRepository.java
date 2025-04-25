package com.photographySkillShare.photographySkillShare.repository;

import com.photographySkillShare.photographySkillShare.entity.SkillPosts;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SkillPostsRepository extends JpaRepository<SkillPosts, Long> {
    // You can define custom queries here if needed
}
