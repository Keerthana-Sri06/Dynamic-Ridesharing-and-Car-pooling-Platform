package com.ridesharing.ridesharing.service;
import com.ridesharing.ridesharing.entity.Booking;
import com.ridesharing.ridesharing.entity.Car;
import com.ridesharing.ridesharing.repository.BookingRepository;
import com.ridesharing.ridesharing.repository.CarRepository;
import org.springframework.stereotype.Service;

@Service
public class BookingService {
    private final BookingRepository bookingRepository;
    private final CarRepository carRepository;

    public BookingService(BookingRepository bookingRepository, CarRepository carRepository) {
        this.bookingRepository = bookingRepository;
        this.carRepository = carRepository;
    }

    public Booking bookSeat(Long carId, String userName, int seats) throws Exception {
        Car car = carRepository.findById(carId).orElseThrow(() -> new Exception("Car not found"));

        if (car.getSeatsAvailable() < seats) {
            throw new Exception("Not enough seats available");
        }

        car.setSeatsAvailable(car.getSeatsAvailable() - seats);
        carRepository.save(car);

        Booking booking = new Booking();
        booking.setCarId(carId);
        booking.setUserName(userName);
        booking.setSeatsBooked(seats);

        return bookingRepository.save(booking);
    }
}

