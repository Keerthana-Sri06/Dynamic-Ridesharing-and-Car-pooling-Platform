package com.ridesharing.ridesharing.controller;
import com.ridesharing.ridesharing.entity.Booking;
import com.ridesharing.ridesharing.service.BookingService;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/booking")
@CrossOrigin(origins = "http://localhost:5173")
public class BookingController {
    private final BookingService bookingService;

    public BookingController(BookingService bookingService) {
        this.bookingService = bookingService;
    }

    @PostMapping("/book")
    public Booking bookSeat(@RequestParam Long carId, @RequestParam String userName, @RequestParam int seats) throws Exception {
        return bookingService.bookSeat(carId, userName, seats);
    }
}
