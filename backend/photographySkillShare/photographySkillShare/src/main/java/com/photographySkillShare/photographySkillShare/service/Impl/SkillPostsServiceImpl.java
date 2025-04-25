package com.photographySkillShare.photographySkillShare.service.Impl;

import com.photographySkillShare.photographySkillShare.dto.SkillPostsDto;
import com.photographySkillShare.photographySkillShare.entity.SkillPosts;
import com.photographySkillShare.photographySkillShare.exception.NotFoundException;
import com.photographySkillShare.photographySkillShare.repository.SkillPostsRepository;
import com.photographySkillShare.photographySkillShare.service.SkillPostsService;
import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class SkillPostsServiceImpl implements SkillPostsService {

    private  SkillPostsRepository skillPostsRepository;
    private  ModelMapper mapper;

    // Create SkillPost
    @Override
    public SkillPostsDto postSkillPost(SkillPostsDto skillPostsDto) {
        // Convert DTO to Entity
        SkillPosts skillPost = skillPostsDto.toEntity(mapper);

        // Save Entity
        SkillPosts savedSkillPost = skillPostsRepository.save(skillPost);

        // Convert back to DTO and return
        return savedSkillPost.toDto(mapper);
    }

    // Get all SkillPosts
    @Override
    public List<SkillPostsDto> getAllSkillPosts() {
        List<SkillPosts> skillPosts = skillPostsRepository.findAll();
        if (skillPosts.isEmpty()) {
            return new ArrayList<>();
        } else {
            return skillPosts.stream()
                    .map(skillPost -> skillPost.toDto(mapper))
                    .toList();
        }
    }

    // Get SkillPost by ID
    @Override
    public SkillPostsDto getSkillPostById(Long id) {
        Optional<SkillPosts> skillPost = skillPostsRepository.findById(id);
        if (skillPost.isPresent()) {
            return skillPost.get().toDto(mapper);
        } else {
            throw new NotFoundException("SkillPost not found with ID: " + id);
        }
    }

    // Update SkillPost by ID
    @Override
    public SkillPostsDto updateSkillPost(Long id, SkillPostsDto skillPostsDto) {
        SkillPosts skillPost = skillPostsDto.toEntity(mapper);
        skillPost.setId(id);
        SkillPosts savedSkillPost = skillPostsRepository.save(skillPost);
        return savedSkillPost.toDto(mapper);
    }

    // Delete SkillPost by ID
    @Override
    public Boolean deleteSkillPost(Long id) {
        if (!skillPostsRepository.existsById(id)) {
            throw new NotFoundException("SkillPost not found with ID: " + id);
        }
        skillPostsRepository.deleteById(id);
        return true;
    }
}
