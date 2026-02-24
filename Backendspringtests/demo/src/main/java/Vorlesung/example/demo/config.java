package Vorlesung.example.demo;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Profile;

@Configuration
@Profile("!local")
public class config {
    
    @Bean
    public String Message(){
        return "Hallo Welt Default";
    }
}
