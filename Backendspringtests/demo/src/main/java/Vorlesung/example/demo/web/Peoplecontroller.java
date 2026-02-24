package Vorlesung.example.demo.web;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
@RestController

public class Peoplecontroller {
    Logger logger = LoggerFactory.getLogger(Peoplecontroller.class);
    @GetMapping("/hello")
    public String hello(){
        return"Hallo von Rest Controller";
    }
    
}
