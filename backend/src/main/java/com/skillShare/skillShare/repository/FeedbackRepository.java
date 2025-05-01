package com.skillShare.skillShare.repository;


import com.skillShare.skillShare.entity.Feedback;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;


public interface FeedbackRepository extends MongoRepository<Feedback, String> {
    // You can define custom MongoDB queries here if needed
}

