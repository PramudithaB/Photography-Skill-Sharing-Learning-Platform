package com.skillShare.skillShare.controller;

import com.skillShare.skillShare.dto.LearningPlanDto;
import com.skillShare.skillShare.service.impl.LearningPlanServiceImpl;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.HashMap;
import java.util.Map;

@RequiredArgsConstructor
@RestController
@RequestMapping("api/learning-plan")
@CrossOrigin(origins = "http://localhost:3000", allowedHeaders = "*", methods = {RequestMethod.GET, RequestMethod.POST, RequestMethod.PUT, RequestMethod.DELETE})
public class LearningPlanController {

    private final LearningPlanServiceImpl learningPlanService;

    // Test endpoint - GET
    @GetMapping("/test")
    public ResponseEntity<Map<String, String>> testGet() {
        Map<String, String> response = new HashMap<>();
        response.put("message", "LearningPlan GET API is working!");
        response.put("status", "success");
        return ResponseEntity.ok(response);
    }

    // Test endpoint - POST
    @PostMapping("/test")
    public ResponseEntity<Map<String, Object>> testPost(@RequestBody Map<String, Object> payload) {
        Map<String, Object> response = new HashMap<>();
        response.put("message", "LearningPlan POST API is working!");
        response.put("status", "success");
        response.put("receivedData", payload);
        return ResponseEntity.ok(response);
    }

    // Create Learning Plan
    @PostMapping("/create")
    public ResponseEntity<LearningPlanDto> createLearningPlan(@RequestBody LearningPlanDto learningPlanDto) {
        try {
            LearningPlanDto createdPlan = learningPlanService.createLearningPlan(learningPlanDto);
            return ResponseEntity.status(HttpStatus.CREATED).body(createdPlan);
        } catch (Exception e) {
            throw new RuntimeException("Failed to create learning plan: " + e.getMessage());
        }
    }

    // Get all Learning Plans
    @GetMapping("/")
    public ResponseEntity<?> getAllLearningPlans() {
        try {
            List<LearningPlanDto> learningPlans = learningPlanService.getAllLearningPlans();
            if (learningPlans.isEmpty()) {
                Map<String, String> response = new HashMap<>();
                response.put("message", "No learning plans found");
                return ResponseEntity.ok(response);
            }
            return ResponseEntity.ok(learningPlans);
        } catch (Exception e) {
            Map<String, String> errorResponse = new HashMap<>();
            errorResponse.put("error", "Failed to fetch learning plans");
            errorResponse.put("message", e.getMessage());
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(errorResponse);
        }
    }

    // Get Learning Plan by ID
    @GetMapping("/{id}")
    public ResponseEntity<LearningPlanDto> getLearningPlanById(@PathVariable String id) {
        return ResponseEntity.ok(learningPlanService.getLearningPlanById(id));
    }

    // Update Learning Plan
    @PutMapping("/{id}")
    public ResponseEntity<LearningPlanDto> updateLearningPlan(@PathVariable String id, @RequestBody LearningPlanDto learningPlanDto) {
        return ResponseEntity.ok(learningPlanService.updateLearningPlan(id, learningPlanDto));
    }

    // Delete Learning Plan
    @DeleteMapping("/{id}")
    public ResponseEntity<Boolean> deleteLearningPlan(@PathVariable String id) {
        return ResponseEntity.ok(learningPlanService.deleteLearningPlan(id));
    }
}