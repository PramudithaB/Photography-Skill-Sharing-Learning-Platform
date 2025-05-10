package com.skillShare.skillShare.dto;

import com.skillShare.skillShare.entity.EventRegistration;
import lombok.Data;
import org.modelmapper.ModelMapper;

@Data
public class EventRegistrationDto {

    private String id;
    private String eventName;
    private String description;
    private String createdAt;
    private String updatedAt;
    private String organizer;
    private String eventDate;
    private String location;
    private String photoUrl;

    public EventRegistration toEntity(ModelMapper mapper) {
        return mapper.map(this, EventRegistration.class);
    }
}
