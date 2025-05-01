package com.skillShare.skillShare.entity;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.time.LocalDateTime;

@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
@Document(collection = "feedback")
public class Feedback {

    @Id
    private String id; // MongoDB _id is usually a String (ObjectId)

    private String comment;

    private String author;

    private String  createdAt;

    private String likeCount;
}
