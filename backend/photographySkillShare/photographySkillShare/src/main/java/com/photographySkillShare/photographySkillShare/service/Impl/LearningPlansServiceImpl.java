package com.photographySkillShare.photographySkillShare.service.Impl;

import com.photographySkillShare.photographySkillShare.dto.LearningPlansDto;
import com.photographySkillShare.photographySkillShare.entity.LearningPlans;
import com.photographySkillShare.photographySkillShare.exception.NotFoundException;
import com.photographySkillShare.photographySkillShare.repository.LearningPlansRepository;
import com.photographySkillShare.photographySkillShare.service.LearningPlansService;
import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class LearningPlansServiceImpl implements LearningPlansService {

    private final LearningPlansRepository learningPlansRepository;
    private final ModelMapper mapper;

    // Create LearningPlan
    @Override
    public LearningPlansDto postLearningPlan(LearningPlansDto learningPlansDto) {
        // Convert DTO to Entity
        LearningPlans learningPlan = learningPlansDto.toEntity(mapper);

        // Save Entity
        LearningPlans savedLearningPlan = learningPlansRepository.save(learningPlan);

        // Convert back to DTO and return
        return savedLearningPlan.toDto(mapper);
    }

    // Get all LearningPlans
    @Override
    public List<LearningPlansDto> getAllLearningPlans() {
        List<LearningPlans> learningPlans = learningPlansRepository.findAll();
        if (learningPlans.isEmpty()) {
            return new ArrayList<>();
        } else {
            return learningPlans.stream()
                    .map(learningPlan -> learningPlan.toDto(mapper))
                    .toList();
        }
    }

    // Get LearningPlan by ID
    @Override
    public LearningPlansDto getLearningPlanById(Long id) {
        Optional<LearningPlans> learningPlan = learningPlansRepository.findById(id);
        if (learningPlan.isPresent()) {
            return learningPlan.get().toDto(mapper);
        } else {
            throw new NotFoundException("LearningPlan not found with ID: " + id);
        }
    }

    // Update LearningPlan by ID
    @Override
    public LearningPlansDto updateLearningPlan(Long id, LearningPlansDto learningPlansDto) {
        LearningPlans learningPlan = learningPlansDto.toEntity(mapper);
        learningPlan.setId(id);
        LearningPlans savedLearningPlan = learningPlansRepository.save(learningPlan);
        return savedLearningPlan.toDto(mapper);
    }

    // Delete LearningPlan by ID
    @Override
    public Boolean deleteLearningPlan(Long id) {
        if (!learningPlansRepository.existsById(id)) {
            throw new NotFoundException("LearningPlan not found with ID: " + id);
        }
        learningPlansRepository.deleteById(id);
        return true;
    }
}
