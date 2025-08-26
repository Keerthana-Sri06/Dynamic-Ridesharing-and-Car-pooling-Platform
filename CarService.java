package com.ridesharing.ridesharing.service;
import com.ridesharing.ridesharing.entity.Car;
import com.ridesharing.ridesharing.repository.CarRepository;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class CarService {
    private final CarRepository carRepository;

    public CarService(CarRepository carRepository) {
        this.carRepository = carRepository;
    }

    public Car postTrip(Car car) {
        return carRepository.save(car);
    }

    public List<Car> searchCars(String keyword) {
        return carRepository.findByLocationContainingIgnoreCaseOrDestinationContainingIgnoreCase(keyword, keyword);
    }

    public Car getCar(Long id) {
        return carRepository.findById(id).orElse(null);
    }

    public Car updateCar(Car car) {
        return carRepository.save(car);
    }
}
