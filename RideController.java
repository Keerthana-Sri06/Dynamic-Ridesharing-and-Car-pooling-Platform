package com.ridesharing.ridesharing.controller;
import com.ridesharing.ridesharing.entity.User;
import com.ridesharing.ridesharing.entity.Driver;
import com.ridesharing.ridesharing.repository.UserRepository;
import com.ridesharing.ridesharing.repository.DriverRepository;
import org.springframework.beans.factory.annotation.Autowired;
import com.ridesharing.ridesharing.service.RideService;
import com.ridesharing.ridesharing.entity.Ride;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import lombok.Getter;
import lombok.Setter;
import java.util.List;


@Getter
@Setter
@RestController
@RequestMapping("/api/rides")
public class RideController {

    private final RideService rideService;

    public RideController(RideService rideService) {
        this.rideService = rideService;
    }

    @PostMapping("/create")
    public ResponseEntity<Ride> createRide(@RequestBody Ride ride) {
        return ResponseEntity.ok(rideService.createRide(ride));
    }

    @GetMapping("/all")
    public ResponseEntity<List<Ride>> getAllRides() {
        return ResponseEntity.ok(rideService.getAllRides());
    }

    // ✅ Search API
    @GetMapping("/search")
    public ResponseEntity<List<Ride>> searchRides(
            @RequestParam String source,
            @RequestParam String destination) {
        return ResponseEntity.ok(rideService.searchRides(source, destination));
    }
}
