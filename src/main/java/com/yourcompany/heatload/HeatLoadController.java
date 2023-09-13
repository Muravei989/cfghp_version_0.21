package com.yourcompany.heatload;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
public class HeatLoadController {

    @PostMapping("/submit")
    public ResponseEntity<String> submitForm(@RequestBody HeatLoadForm heatLoadForm) {
        // Save the form data to an Excel file using Apache POI
        // You would need to implement this part to write to an Excel file
        // Example: ExcelWriter.writeToFile(heatLoadForm);

        return ResponseEntity.ok("Form submitted successfully.");
    }
}

