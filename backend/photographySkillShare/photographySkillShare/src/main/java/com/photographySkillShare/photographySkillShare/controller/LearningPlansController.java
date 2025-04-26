package com.photographySkillShare.photographySkillShare.controller;

import com.photographySkillShare.photographySkillShare.dto.LearningPlansDto;
import com.photographySkillShare.photographySkillShare.service.Impl.LearningPlansServiceImpl;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/learningplans")
@RequiredArgsConstructor
@CrossOrigin
public class LearningPlansController {

    private final LearningPlansServiceImpl learningPlansService;

    // Create LearningPlan
    @PostMapping("/create")
    public ResponseEntity<LearningPlansDto> postLearningPlan(@RequestBody LearningPlansDto learningPlansDto) {
        return ResponseEntity.status(HttpStatus.CREATED).body(learningPlansService.postLearningPlan(learningPlansDto));
    }

    // Get all LearningPlans
    @GetMapping("/")
    public ResponseEntity<List<LearningPlansDto>> getAllLearningPlans() {
        return ResponseEntity.status(HttpStatus.OK).body(learningPlansService.getAllLearningPlans());
    }

    // Get LearningPlan by ID
    @GetMapping("/{id}")
    public ResponseEntity<LearningPlansDto> getLearningPlanById(@PathVariable Long id) {
        return ResponseEntity.status(HttpStatus.OK).body(learningPlansService.getLearningPlanById(id));
    }

    // Update LearningPlan by ID
    @PutMapping("/{id}")
    public ResponseEntity<LearningPlansDto> updateLearningPlan(@PathVariable Long id, @RequestBody LearningPlansDto learningPlansDto) {
        return ResponseEntity.status(HttpStatus.OK).body(learningPlansService.updateLearningPlan(id, learningPlansDto));
    }

    // Delete LearningPlan by ID
    @DeleteMapping("/{id}")
    public ResponseEntity<Boolean> deleteLearningPlan(@PathVariable Long id) {
        return ResponseEntity.status(HttpStatus.OK).body(learningPlansService.deleteLearningPlan(id));
    }
}
