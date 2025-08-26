package com.ridesharing.ridesharing;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
@ComponentScan(basePackages = {
        "com.ridesharing.ridesharing.controller",
        "com.ridesharing.ridesharing.service",
        "com.ridesharing.ridesharing.repository",
        "com.ridesharing.ridesharing.entity"
})
@EntityScan(basePackages = "com.ridesharing.ridesharing.entity")
public class RidesharingApplication {

	public static void main(String[] args) {
		SpringApplication.run(RidesharingApplication.class, args);
	}

}
