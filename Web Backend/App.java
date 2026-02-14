
import java.util.*;

public class App {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.println("Wie viele Perosnen seid Ihr");
        int anzahl = scanner.nextInt();
        List<Person> personen = new ArrayList<>();

        for (int i = 0; i < anzahl; i++) {
            System.out.println("Bitte das Alter von Person " + (i + 1) + " angeben");
            int alter = scanner.nextInt();
            System.out.println("Bitte das Name von Person " + (i + 1) + " angeben");
            String name = scanner.next();
            personen.add(new Person(alter, name));
            System.out.println("Danke");
        }

        System.out.println(
                "Bitte den Wochentag Angeben. (Erlaubt sind: Montag, Dienstag, Mittwoch, Donnerstag, Freitag, Samstag, Sonntag)");
        String tag = scanner.next();
        float preis = berechneTicketpreis(personen, tag);
        System.out.println("------------------------------------------");
        System.out.println("Gesamtpreis der Gruppe: " + preis + "€");

        scanner.close();
    }

    public static float berechneTicketpreis(List<Person> personen, String wochentag) {
        float gesamtergebnis = 0;

        System.out.println("=================================================");
        System.out.println("Zusammenfasssung der Tickets: ");
        for (Person p : personen) {
            float ergebnis;

            if (p.getAlter() <= 5) {
                ergebnis = 0;
            } else {
                if (p.getAlter() <= 17) {
                    ergebnis = 10;
                } else {
                    if (p.getAlter() <= 64) {
                        ergebnis = 20;
                    } else {
                        ergebnis = 15;
                    }
                }
            }
            switch (wochentag) {
                case "Montag":
                    ergebnis = ergebnis * (float) 0.99;
                    break;
                case "Dienstag":
                    ergebnis = ergebnis * (float) 0.80;
                    break;
                case "Mittwoch":
                    ergebnis = ergebnis * 1;
                    break;
                case "Donnerstag":
                    ergebnis = ergebnis * 1;
                    break;
                case "Freitag":
                    ergebnis = ergebnis * (float) 1.1;
                    break;
                case "Samstag":
                    ergebnis = ergebnis * (float) 1.2;
                    break;
                case "Sonntag":
                    ergebnis = ergebnis * (float) 1.15;
                    break;

                default:
                    break;
            }
            System.out.println(p.getName() + " (Alter " + p.getAlter() + ") zahlt : " + ergebnis + "€");
            gesamtergebnis += ergebnis;
        }
        return gesamtergebnis;

    }
}