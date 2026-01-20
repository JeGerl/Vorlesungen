import {
  questionFloat,
  questionInt
} from 'readline-sync';

// === Eingabe ===
console.log("=== Trinkgeldrechner ===");

const bill = questionFloat("Rechnungsbetrag: ");

const persons = questionInt("Anzahl Personen: ");

const percent = questionFloat("Trinkgeld (%): ");

// === Validierung ===
const isValid = validation(bill,percent,persons);

// === Berechnung ===
const tip = calculateTip(bill,percent);
const total = bill + tip;
const perPerson = perpersona(total,persons)

// === Bewertung ===
const rating = getrating(percent)

// === Ausgabe ===
console.log("");
console.log("--- Ergebnis ---");
console.log("Eingaben gültig: " + isValid);

// Hier sehen wir die Grenzen des ternären Operators
// Der Code ist nicht leicht zu konstruieren und nachzuvollziehen
// Mit if/else wäre dies deutlich besser

displayResult(bill,tip,total,rating,perPerson)








function calculateTip(bill, percent) {
  return Math.round((bill * (percent / 100)) * 100) / 100;
}

function displayResult(bill, tip,percent,perPerson,rating) {
  let total = bill + tip;
  
    const output = 
  `Rechnungsbetrag:  ${bill.toFixed(2)}
  Trinkgeld (${percent}%):  ${tip.toFixed(2)}
  Gesamtbetrag:     ${total.toFixed(2)}
  Pro Person:       ${perPerson.toFixed(2)}
  Bewertung:        ${rating}`;
  console.log(output)

}

function validation(bill, percent, person) {
  let validbill = bill > 0;
  let validpercent = percent >= 0 && percent <= 100
  let validperson = person > 0;
  if (validbill && validpercent && validperson) {
    return true
  } else {
    return "Fehler Invalide Eingabe, berechnung Auserhalb des Erlaubten"
  }
}

function getrating(percent) {
  let answer = "Normal"
  if (percent <= 4) {
    answer = "Sehr Sparsam"
  } else {
    if (percent <= 9) {
      answer = "Sparsam";
    } else {
      if (percent <= 14) {
        answer = "Normal"
      } else {
        if (percent <= 19) {
          answer = "Großzügig"
        } else {
          answer = "Sehr Großzügif"
        }
      }
    }
    return answer;
  }
}

function perpersona(total, person) {

  return Math.round((total / person) * 100) / 100;
}

function suggestedTip(serviceLevel) {
  let tip = 0;

  switch (serviceLevel) {
    case 1:
      tip = 5
      break;
    case 2:
      tip = 10;
      break;
    case 3:
      tip = 15;
      break;
    default:
      tip = 0;
      break;
  }
}