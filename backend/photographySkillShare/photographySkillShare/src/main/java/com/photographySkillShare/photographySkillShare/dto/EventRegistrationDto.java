package com.photographySkillShare.photographySkillShare.dto;

import com.photographySkillShare.photographySkillShare.entity.EventRegistration;
import lombok.Data;
import org.modelmapper.ModelMapper;

import java.time.LocalDateTime;

@Data
public class EventRegistrationDto {
    private Long id;
    private String eventName;
    private String description;
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;
    private String organizer;
    private LocalDateTime eventDate;
    private String location;

    public EventRegistration toEntity(ModelMapper mapper) {
        return mapper.map(this, EventRegistration.class);
    }
}
