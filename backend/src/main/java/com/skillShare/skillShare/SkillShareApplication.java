package com.skillShare.skillShare;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication(scanBasePackages = {"com.skillShare.skillShare"})
public class SkillShareApplication {

	public static void main(String[] args) {
		SpringApplication.run(SkillShareApplication.class, args);
	}

}
