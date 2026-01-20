import { questionFloat, questionInt } from 'readline-sync';

  // === Eingabe ===
  console.log("=== Trinkgeldrechner ===");

  const bill = questionFloat("Rechnungsbetrag: ");

  const percent = questionFloat("Trinkgeld (%): ");

  const persons = questionInt("Anzahl Personen: ");

  // === Validierung ===
  const isValidBill = bill > 0;
  const isValidPercent = percent >= 0 && percent <= 100;
  const isValidPersons = persons > 0;
  const isValid = isValidBill && isValidPercent && isValidPersons;

  // === Berechnung ===
  const tip = bill * percent / 100;
  const total = bill + tip;
  const perPerson = total / persons;

  // === Bewertung ===
  const rating = percent >= 15 ? "Großzügig!" : percent >= 10 ? "Normal" : "Sparsam";

  // === Ausgabe ===
  console.log("");
  console.log("--- Ergebnis ---");
  console.log("Eingaben gültig: " + isValid);

  // Hier sehen wir die Grenzen des ternären Operators
  // Der Code ist nicht leicht zu konstruieren und nachzuvollziehen
  // Mit if/else wäre dies deutlich besser
  const output = isValid
    ? `Rechnungsbetrag:  ${bill.toFixed(2)}
  Trinkgeld (${percent}%):  ${tip.toFixed(2)}
  Gesamtbetrag:     ${total.toFixed(2)}
  Pro Person:       ${perPerson.toFixed(2)}
  Bewertung:        ${rating}`
    : "Warnung: Ungültige Eingaben!";

  console.log(output);


  