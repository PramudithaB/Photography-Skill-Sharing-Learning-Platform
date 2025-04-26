package com.photographySkillShare.photographySkillShare.entity;

import com.photographySkillShare.photographySkillShare.dto.EventRegistrationDto;
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
@Table(name = "event_registration")
public class EventRegistration {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", updatable = false, nullable = false)
    private Long id;

    @Column(name = "event_name", nullable = false)
    private String eventName;

    @Column(name = "description", columnDefinition = "TEXT", nullable = false)
    private String description;

    @Column(name = "created_at", nullable = false)
    private LocalDateTime createdAt;

    @Column(name = "updated_at")
    private LocalDateTime updatedAt;

    @Column(name = "organizer", nullable = false)
    private String organizer;

    @Column(name = "event_date", nullable = false)
    private LocalDateTime eventDate;

    @Column(name = "location", nullable = false)
    private String location;

    public EventRegistrationDto toDto(ModelMapper mapper) {
        return mapper.map(this, EventRegistrationDto.class);
    }
}
