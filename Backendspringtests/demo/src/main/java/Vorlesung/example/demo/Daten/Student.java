package Vorlesung.example.demo.Daten;

public class Student {
    private String Name;
    private int Studnr;
    private int Status;
    private int Zähler = 0;
    public Student(){

    }
    public Student(String Name, int Studnr){
        this.Name=Name;
        this.Studnr=Studnr;
        this.Status=0;
        if(Studnr>Zähler){
            Zähler++;
        }
    }
    
}
