package com.ridesharing.ridesharing.controller;
import com.ridesharing.ridesharing.entity.Driver;
import com.ridesharing.ridesharing.service.DriverService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/driver")
@CrossOrigin(origins = "http://localhost:5173") // Allow frontend React
public class DriverController {

    @Autowired
    private DriverService driverService;

    // Register Driver
    @PostMapping("/register")
    public Driver registerDriver(@RequestBody Driver driver) {
        return driverService.registerDriver(driver);
    }

    // Login Driver
    @PostMapping("/login")
    public String loginDriver(@RequestParam String email, @RequestParam String password) {
        boolean success = driverService.loginDriver(email, password);
        return success ? "Login successful" : "Invalid credentials";
    }
}
