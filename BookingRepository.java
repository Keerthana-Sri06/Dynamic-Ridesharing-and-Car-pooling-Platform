package com.ridesharing.ridesharing.repository;

import com.ridesharing.ridesharing.entity.Booking;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BookingRepository extends JpaRepository<Booking, Long> {
}
