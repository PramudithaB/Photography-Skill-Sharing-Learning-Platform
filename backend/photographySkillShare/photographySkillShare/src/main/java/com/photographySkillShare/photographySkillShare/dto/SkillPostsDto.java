package com.photographySkillShare.photographySkillShare.dto;

import com.photographySkillShare.photographySkillShare.entity.SkillPosts;
import lombok.Data;
import org.modelmapper.ModelMapper;

import java.time.LocalDateTime;

@Data
public class SkillPostsDto {
    private Long id;
    private String title;
    private String description;
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;
    private String author;
    private String category;
    private String tags;
    private String imageUrl;

    public SkillPosts toEntity(ModelMapper mapper) {
        return mapper.map(this, SkillPosts.class);
    }
}

