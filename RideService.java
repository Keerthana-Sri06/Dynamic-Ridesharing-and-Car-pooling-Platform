package com.ridesharing.ridesharing.service;

import com.ridesharing.ridesharing.entity.Ride;
import com.ridesharing.ridesharing.repository.RideRepository;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class RideService {

    private final RideRepository rideRepository;

    public RideService(RideRepository rideRepository) {
        this.rideRepository = rideRepository;
    }

    public Ride createRide(Ride ride) {
        return rideRepository.save(ride);
    }

    public List<Ride> getAllRides() {
        return rideRepository.findAll();   // ✅ fixed spelling
    }

    // ✅ Search rides by source & destination
    public List<Ride> searchRides(String source, String destination) {
        return rideRepository.findBySourceAndDestination(source, destination);
    }
}
