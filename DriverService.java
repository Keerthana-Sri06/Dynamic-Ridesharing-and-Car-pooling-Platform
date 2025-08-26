package com.ridesharing.ridesharing.service;
import com.ridesharing.ridesharing.entity.Driver;
import com.ridesharing.ridesharing.repository.DriverRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class DriverService {

    @Autowired
    private DriverRepository driverRepository;

    public Driver registerDriver(Driver driver) {
        return driverRepository.save(driver);
    }

    public boolean loginDriver(String email, String password) {
        Optional<Driver> driver = driverRepository.findByEmail(email);
        return driver.isPresent() && driver.get().getPassword().equals(password);
    }
}
