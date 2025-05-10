package com.skillShare.skillShare.dto;

import com.skillShare.skillShare.entity.LearningPlan;
import lombok.Data;
import org.modelmapper.ModelMapper;

@Data
public class LearningPlanDto {
    private String id;
    private String title;
    private String category;
    private String description;

    public LearningPlan toEntity(ModelMapper mapper) {
        return mapper.map(this, LearningPlan.class);
    }
}