package com.klef.fsdproject.springboot.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.klef.fsdproject.springboot.dto.CourseDTO;
import com.klef.fsdproject.springboot.model.BookCourse;
import com.klef.fsdproject.springboot.model.Course;
import com.klef.fsdproject.springboot.model.Tutor;
import com.klef.fsdproject.springboot.service.TutorService;

@RestController
@RequestMapping("/tutor")
@CrossOrigin("*")
public class TutorController {

    @Autowired
    private TutorService tutorService;

    @PostMapping("/checktutorlogin")
    public ResponseEntity<?> checktutorlogin(@RequestBody Tutor tutor) {
        try {
            if (tutor.getUsername() == null || tutor.getPassword() == null) {
                return ResponseEntity.badRequest().body("Username and Password must not be null");
            }

            Tutor t = tutorService.checktutorlogin(tutor.getUsername(), tutor.getPassword());

            if (t != null) {
                return ResponseEntity.ok(t);
            } else {
                return ResponseEntity.status(401).body("Invalid Username or Password");
            }
        } catch (Exception e) {
            e.printStackTrace(); // For debugging in logs
            return ResponseEntity.status(500).body("Login failed: " + e.getMessage());
        }
    }

    @PostMapping("/addcourse")
    public ResponseEntity<String> addcourse(@RequestBody CourseDTO dto) {
        try {
            Tutor tutor = tutorService.getTutorById(dto.tutor_id);
            if (tutor == null) {
                return ResponseEntity.status(404).body("Tutor not found");
            }

            Course course = new Course();
            course.setAccessmode(dto.accessmode);
            course.setTitle(dto.title);
            course.setDescription(dto.description);
            course.setCapacity(dto.capacity);
            course.setCost(dto.cost);
            course.setTutor(tutor);

            String output = tutorService.addcourse(course);
            return ResponseEntity.ok(output);
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.status(500).body("Failed to Add Course: " + e.getMessage());
        }
    }

    @GetMapping("/viewcoursesbytutor/{id}")
    public ResponseEntity<List<Course>> viewcoursesbytutor(@PathVariable int id) {
        try {
            List<Course> courses = tutorService.viewcoursesbytutor(id);
            return ResponseEntity.ok(courses);
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.status(500).build();
        }
    }

    @GetMapping("/viewbookingsbytutor/{tutorId}")
    public ResponseEntity<List<BookCourse>> viewBookingsByTutor(@PathVariable int tutorId) {
        try {
            List<BookCourse> bookings = tutorService.getbookingsbyTutor(tutorId);
            return ResponseEntity.ok(bookings);
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.status(500).build();
        }
    }

    @GetMapping("/updatebookingstatus")
    public ResponseEntity<String> updateBookingStatus(@RequestParam int id, @RequestParam String status) {
        try {
            String output = tutorService.updatebookingstatus(id, status);
            return ResponseEntity.ok(output);
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.status(500).body("Error: " + e.getMessage());
        }
    }
}
