package com.example.iotenergymonitoring.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/energy")
public class EnergyController {

    @GetMapping("/consumption")
    public ResponseEntity<String> getEnergyConsumption() {
        return ResponseEntity.ok("Energy consumption data will be displayed here.");
    }
}
