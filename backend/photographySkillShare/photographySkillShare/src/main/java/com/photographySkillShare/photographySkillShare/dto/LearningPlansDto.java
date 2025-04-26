package com.photographySkillShare.photographySkillShare.dto;

import com.photographySkillShare.photographySkillShare.entity.LearningPlans;
import lombok.Data;
import org.modelmapper.ModelMapper;

import java.time.LocalDateTime;

@Data
public class LearningPlansDto {
    private Long id;
    private String title;
    private String description;
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;
    private String author;
    private String category;
    private String duration;
    private String difficulty;
    private String objectives;
    private String prerequisites;
    private String resources;
    private String imageUrl;

    public LearningPlans toEntity(ModelMapper mapper) {
        return mapper.map(this, LearningPlans.class);
    }
}
