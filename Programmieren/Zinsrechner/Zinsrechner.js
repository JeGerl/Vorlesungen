import { questionFloat, questionInt } from "readline-sync";

var startcapital = questionFloat("Bitte Startkapital eingeben: ");
var zinssatz = questionFloat("Bitte Zinssatz eingeben: ");
var laufzeit = questionInt("Die Laufzeit: ");
var sparrate= questionFloat("Monatliche Sparrate: ")
var output1=`
Startkapital:     ${startcapital.toFixed(2)}
Zinssatz (%):     ${zinssatz.toFixed(2)}
Laufzeit (Jahre): ${laufzeit}
---
`
//var zinsen= calculatezins(startcapital,zinssatz);
console.log(output1);
var newcapital=calculatezinsoverYears(startcapital,zinssatz,laufzeit,sparrate);
var spargewinn= startcapital+(laufzeit*(sparrate*12))
var zinsgewinn= newcapital-spargewinn


var output2=`
---
Neues Kapiral:  ${newcapital.toFixed(2)}
Eingezahlt: ${spargewinn} (${startcapital} + ${laufzeit} x ${sparrate*12})
Gesamte Zinsen: ${zinsgewinn.toFixed(2)}
`
console.log(output2)









function calculatezinsoverYears(capital,zins, years, spar){
    var calccapital = capital;
    for(var i=0; i<years;  i++ ){
        calccapital= calccapital+(12*spar)
        let zinsen = calculatezins(calccapital,zins) 
        displaycurrentyear(calccapital,i);
        calccapital = calccapital+zinsen 
    }
    return calccapital

}

function calculatezins(capital, zins){
    return capital*(zins/100)
}
function displaycurrentyear(capital, year){
    console.log(`Jahr ${year}: ${capital.toFixed(2)}`)
}