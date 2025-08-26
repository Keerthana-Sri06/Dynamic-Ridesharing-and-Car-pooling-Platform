package com.ridesharing.ridesharing.repository;

import com.ridesharing.ridesharing.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface UserRepository extends JpaRepository<User, Long> {
    // To check if email already exists
    Optional<User> findByEmail(String email);

    // To validate login credentials (email + password together)
    Optional<User> findByEmailAndPassword(String email, String password);
}
