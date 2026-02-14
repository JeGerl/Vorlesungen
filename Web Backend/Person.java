public class Person {
    private String Name;
    private int alter;

    public Person(int alter, String Name) {
        this.alter = alter;
        this.Name = Name;
    }

    public int getAlter() {
        return alter;
    }

    public String getName() {
        return Name;
    }
}
