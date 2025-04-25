package com.photographySkillShare.photographySkillShare.controller;

import com.photographySkillShare.photographySkillShare.dto.SkillPostsDto;
import com.photographySkillShare.photographySkillShare.service.Impl.SkillPostsServiceImpl;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/skillposts")
@RequiredArgsConstructor
@CrossOrigin
public class SkillPostsController {

    private final SkillPostsServiceImpl skillPostsService;

    // Create SkillPost
    @PostMapping("/create")
    public ResponseEntity<SkillPostsDto> postSkillPost(@RequestBody SkillPostsDto skillPostsDto) {
        return ResponseEntity.status(HttpStatus.CREATED).body(skillPostsService.postSkillPost(skillPostsDto));
    }

    // Get all SkillPosts
    @GetMapping("/")
    public ResponseEntity<List<SkillPostsDto>> getAllSkillPosts() {
        return ResponseEntity.status(HttpStatus.OK).body(skillPostsService.getAllSkillPosts());
    }

    // Get SkillPost by ID
    @GetMapping("/{id}")
    public ResponseEntity<SkillPostsDto> getSkillPostById(@PathVariable Long id) {
        return ResponseEntity.status(HttpStatus.OK).body(skillPostsService.getSkillPostById(id));
    }

    // Update SkillPost by ID
    @PutMapping("/{id}")
    public ResponseEntity<SkillPostsDto> updateSkillPost(@PathVariable Long id, @RequestBody SkillPostsDto skillPostsDto) {
        return ResponseEntity.status(HttpStatus.OK).body(skillPostsService.updateSkillPost(id, skillPostsDto));
    }

    // Delete SkillPost by ID
    @DeleteMapping("/{id}")
    public ResponseEntity<Boolean> deleteSkillPost(@PathVariable Long id) {
        return ResponseEntity.status(HttpStatus.OK).body(skillPostsService.deleteSkillPost(id));
    }
}

