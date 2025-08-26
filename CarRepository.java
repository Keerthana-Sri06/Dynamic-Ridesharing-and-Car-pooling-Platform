package com.ridesharing.ridesharing.repository;
import com.ridesharing.ridesharing.entity.Car;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface CarRepository extends JpaRepository<Car, Long> {
    List<Car> findByLocationContainingIgnoreCaseOrDestinationContainingIgnoreCase(String location, String destination);
}
