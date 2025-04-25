package com.photographySkillShare.photographySkillShare.dto;

import com.photographySkillShare.photographySkillShare.entity.Feedback;
import jakarta.persistence.Column;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Data;
import org.modelmapper.ModelMapper;

import java.time.LocalDateTime;
@Data
public class FeedbackDto {

    private Long id;
    private String comment;
    private String author;
    private LocalDateTime createdAt;
    private String likeCount;

    public Feedback toEntity(ModelMapper mapper){return mapper.map(this, Feedback.class);}
}
