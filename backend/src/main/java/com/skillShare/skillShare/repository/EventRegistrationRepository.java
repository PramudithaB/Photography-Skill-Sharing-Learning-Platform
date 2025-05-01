package com.skillShare.skillShare.repository;

import com.skillShare.skillShare.entity.EventRegistration;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface EventRegistrationRepository extends MongoRepository<EventRegistration, String> {
    // You can define custom MongoDB queries here if needed
}
