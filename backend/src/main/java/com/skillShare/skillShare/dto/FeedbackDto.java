package com.skillShare.skillShare.dto;

import com.skillShare.skillShare.entity.Feedback;
import lombok.Data;
import org.modelmapper.ModelMapper;

import java.time.LocalDateTime;

@Data
public class FeedbackDto {

    private String id; // Change Long to String for MongoDB _id
    private String comment;
    private String author;
    private String  createdAt;
    private String likeCount;

    public Feedback toEntity(ModelMapper mapper) {
        return mapper.map(this, Feedback.class);
    }
}
