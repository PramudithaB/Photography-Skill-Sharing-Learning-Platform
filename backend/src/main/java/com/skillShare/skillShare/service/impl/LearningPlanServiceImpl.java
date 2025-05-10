package com.skillShare.skillShare.service.impl;

import com.skillShare.skillShare.dto.LearningPlanDto;
import com.skillShare.skillShare.entity.LearningPlan;
import com.skillShare.skillShare.exception.NotFoundException;
import com.skillShare.skillShare.repository.LearningPlanRepository;
import com.skillShare.skillShare.service.LearningPlanService;
import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class LearningPlanServiceImpl implements LearningPlanService {

    private final LearningPlanRepository learningPlanRepository;
    private final ModelMapper mapper;

    @Override
    public LearningPlanDto createLearningPlan(LearningPlanDto learningPlanDto) {
        LearningPlan learningPlan = mapper.map(learningPlanDto, LearningPlan.class);
        LearningPlan savedLearningPlan = learningPlanRepository.save(learningPlan);
        LearningPlanDto resultDto = mapper.map(savedLearningPlan, LearningPlanDto.class);
        resultDto.setId(savedLearningPlan.getId());
        return resultDto;
    }

    @Override
    public List<LearningPlanDto> getAllLearningPlans() {
        try {
            List<LearningPlan> learningPlanList = learningPlanRepository.findAll();
            
            // Debug log
            System.out.println("Found " + learningPlanList.size() + " learning plans");
            
            if (learningPlanList.isEmpty()) {
                System.out.println("No learning plans found in database");
                return List.of(); // Return empty list instead of null
            }

            return learningPlanList.stream()
                    .map(learningPlan -> {
                        try {
                            LearningPlanDto dto = mapper.map(learningPlan, LearningPlanDto.class);
                            dto.setId(learningPlan.getId());
                            System.out.println("Mapped learning plan with ID: " + dto.getId());
                            return dto;
                        } catch (Exception e) {
                            System.err.println("Error mapping learning plan: " + e.getMessage());
                            throw new RuntimeException("Error mapping learning plan", e);
                        }
                    })
                    .collect(Collectors.toList());
        } catch (Exception e) {
            System.err.println("Error fetching all learning plans: " + e.getMessage());
            throw new RuntimeException("Error fetching all learning plans", e);
        }
    }

    @Override
    public LearningPlanDto getLearningPlanById(String id) {
        LearningPlan learningPlan = learningPlanRepository.findById(id)
                .orElseThrow(() -> new NotFoundException("Learning Plan not found with ID: " + id));
        LearningPlanDto dto = mapper.map(learningPlan, LearningPlanDto.class);
        dto.setId(learningPlan.getId());
        return dto;
    }

    @Override
    public LearningPlanDto updateLearningPlan(String id, LearningPlanDto learningPlanDto) {
        LearningPlan existingLearningPlan = learningPlanRepository.findById(id)
                .orElseThrow(() -> new NotFoundException("Learning Plan not found with ID: " + id));

        String entityId = existingLearningPlan.getId();
        mapper.map(learningPlanDto, existingLearningPlan);
        existingLearningPlan.setId(entityId);

        LearningPlan updatedLearningPlan = learningPlanRepository.save(existingLearningPlan);
        LearningPlanDto resultDto = mapper.map(updatedLearningPlan, LearningPlanDto.class);
        resultDto.setId(updatedLearningPlan.getId());
        return resultDto;
    }

    @Override
    public Boolean deleteLearningPlan(String id) {
        if (!learningPlanRepository.existsById(id)) {
            throw new NotFoundException("Learning Plan not found with ID: " + id);
        }
        learningPlanRepository.deleteById(id);
        return true;
    }
}
