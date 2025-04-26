package com.photographySkillShare.photographySkillShare.entity;

import com.photographySkillShare.photographySkillShare.dto.LearningPlansDto;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.modelmapper.ModelMapper;

import java.time.LocalDateTime;

@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "learning_plans")
public class LearningPlans {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", updatable = false, nullable = false)
    private Long id;

    @Column(name = "title", nullable = false)
    private String title;

    @Column(name = "description", columnDefinition = "TEXT", nullable = false)
    private String description;

    @Column(name = "created_at", nullable = false)
    private LocalDateTime createdAt;

    @Column(name = "updated_at")
    private LocalDateTime updatedAt;

    @Column(name = "author", nullable = false)
    private String author;

    @Column(name = "category", nullable = false)
    private String category;

    @Column(name = "duration", nullable = false)
    private String duration;

    @Column(name = "difficulty", nullable = false)
    private String difficulty;

    @Column(name = "objectives", columnDefinition = "TEXT")
    private String objectives;

    @Column(name = "prerequisites", columnDefinition = "TEXT")
    private String prerequisites;

    @Column(name = "resources", columnDefinition = "TEXT")
    private String resources;

    @Column(name = "image_url")
    private String imageUrl;

    public LearningPlansDto toDto(ModelMapper mapper) {
        return mapper.map(this, LearningPlansDto.class);
    }
}
