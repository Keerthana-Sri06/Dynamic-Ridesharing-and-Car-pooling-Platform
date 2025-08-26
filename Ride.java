package com.ridesharing.ridesharing.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;

@Entity
@Table(name = "rides")
@Getter
@Setter
public class Ride {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String source;
    private String destination;
    private int availableSeats;

    // ✅ Car details
    private String carModel;
    private String carNumber;

    // ✅ Date & time of ride
    private LocalDateTime departureTime;

    // ✅ Ratings (average rating from passengers)
    private Double rating;

    // ✅ Ride belongs to a User (driver)
    @ManyToOne
    @JoinColumn(name = "user_id", nullable = false)
    private User driver;
}

