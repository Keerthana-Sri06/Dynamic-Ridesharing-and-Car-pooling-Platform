package com.ridesharing.ridesharing.controller;
import com.ridesharing.ridesharing.entity.Car;
import com.ridesharing.ridesharing.service.CarService;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("api/cars")
@CrossOrigin(origins = "http://localhost:5173")
public class CarController {
    private final CarService carService;

    public CarController(CarService carService) {
        this.carService = carService;
    }

    @PostMapping("api/post")
    public Car postTrip(@RequestBody Car car) {
        return carService.postTrip(car);
    }

    @GetMapping("api/search")
    public List<Car> searchCars(@RequestParam String keyword) {
        return carService.searchCars(keyword);
    }
}
