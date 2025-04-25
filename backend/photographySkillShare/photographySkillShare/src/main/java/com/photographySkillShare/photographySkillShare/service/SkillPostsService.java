package com.photographySkillShare.photographySkillShare.service;

import com.photographySkillShare.photographySkillShare.dto.SkillPostsDto;

import java.util.List;

public interface SkillPostsService {
    // Create a new SkillPost
    public SkillPostsDto postSkillPost(SkillPostsDto skillPostsDto);

    // Get all SkillPosts
    public List<SkillPostsDto> getAllSkillPosts();

    // Get a SkillPost by ID
    public SkillPostsDto getSkillPostById(Long id);

    // Update a SkillPost by ID
    public SkillPostsDto updateSkillPost(Long id, SkillPostsDto skillPostsDto);

    // Delete a SkillPost by ID
    public Boolean deleteSkillPost(Long id);
}

