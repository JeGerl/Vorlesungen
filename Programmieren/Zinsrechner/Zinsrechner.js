import { questionFloat, questionInt } from "readline-sync";

var startcapital = questionFloat("Bitte Startkapital eingeben: ");
var zinssatz = questionFloat("Bitte Zinssatz eingeben: ");
var laufzeit = questionInt("Die Laufzeit")

var zinsen= calculatezins(startcapital,zinssatz);
var newcapital=startcapital+zinsen;
var output=`
Startkapital: ${startcapital.toFixed(2)}
Zinssatz (%): ${zinssatz.toFixed(2)}
---
Zinsen:       ${zinsen.toFixed(2)}
Neues Kapiral:${newcapital.toFixed(2)}
`
console.log(output)


function calculatezins(capital, zins){
    return capital*(zins/100)
}