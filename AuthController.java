package com.ridesharing.ridesharing.controller;
import com.ridesharing.ridesharing.entity.User;
import com.ridesharing.ridesharing.entity.Driver;
import com.ridesharing.ridesharing.repository.UserRepository;
import com.ridesharing.ridesharing.repository.DriverRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import lombok.Getter;
import lombok.Setter;

import java.util.Optional;
@Getter
@Setter
@RestController
@RequestMapping("/auth")
public class AuthController {

    private final UserRepository userRepository;
    private final DriverRepository driverRepository;

    @Autowired
    public AuthController(UserRepository userRepository, DriverRepository driverRepository) {
        this.userRepository = userRepository;
        this.driverRepository = driverRepository;
    }

    // ==============================
    // Register User
    // ==============================
    @PostMapping("/user/register")
    public ResponseEntity<?> registerUser(@RequestBody User user) {
        if (userRepository.findByEmail(user.getEmail()).isPresent()) {
            return ResponseEntity.badRequest().body("Email already registered");
        }
        return ResponseEntity.ok(userRepository.save(user));
    }

    // ==============================
    // Login User
    // ==============================
    // ==============================
// Login User
// ==============================
    @PostMapping("/user/login")
    public ResponseEntity<?> loginUser(@RequestBody User loginRequest) {
        Optional<User> user = userRepository.findByEmailAndPassword(
                loginRequest.getEmail(),
                loginRequest.getPassword()
        );

        if (user.isPresent()) {
            // On success → return user + message (frontend can redirect to dashboard)
            return ResponseEntity.ok().body(
                    "✅ Login successful! Redirecting to dashboard..."
            );
        } else {
            return ResponseEntity.status(401).body("❌ Invalid email or password");
        }
    }

    // ==============================
    // Register Driver
    // ==============================
    @PostMapping("/driver/register")
    public ResponseEntity<?> registerDriver(@RequestBody Driver driver) {
        if (driverRepository.findByEmail(driver.getEmail()).isPresent()) {
            return ResponseEntity.badRequest().body("Email already registered");
        }
        return ResponseEntity.ok(driverRepository.save(driver));
    }

    // ==============================
    // Login Driver
    // ==============================
    @PostMapping("/driver/login")
    public ResponseEntity<?> loginDriver(@RequestBody Driver loginRequest) {
        Optional<Driver> driver = driverRepository.findByEmail(loginRequest.getEmail());
        if (driver.isPresent() && driver.get().getPassword().equals(loginRequest.getPassword())) {
            return ResponseEntity.ok(driver.get());
        }
        return ResponseEntity.status(401).body("Invalid credentials");
    }
}
