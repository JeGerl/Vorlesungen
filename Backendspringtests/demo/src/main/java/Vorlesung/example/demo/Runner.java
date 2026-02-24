package Vorlesung.example.demo;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;


@Component
public class Runner implements CommandLineRunner{
    private final Logger logger = LoggerFactory.getLogger(Runner.class);
    private String Message;

    public Runner(String Message){
        this.Message=Message;
    }
    
    @Override
    public void run(String... args){
        logger.info("Aus dem Bean: {}", Message);
    }
}
