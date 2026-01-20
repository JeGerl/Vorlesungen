function calculateTip(bill, percent) {
    return Math.round((bill * (percent / 100)) * 100) / 100;
}

function displayResult(bill, tip) {
    let total = bill + tip;
    const output =
        `Rechnungsbetrag:  ${bill.toFixed(2)}
Trinkgeld:        ${tip.toFixed(2)}
Gesamtbetrag:    ${total.toFixed(2)}`;
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

    switch(serviceLevel){
        case 1:
            tip=5
            break;
        case 2:
            tip=10;
            break;
        case 3:
            tip=15;
            break;
        default:
            tip=0;
            break;
    }
}

console.log(perpersona(120, 4))
//console.log(getrating(20))
/*
console.log(validation(50,15,2));

console.log(validation(-50,15,2));

console.log(validation(50,150,2));
console.log(validation(50,15,0));
*/


//const tip = calculateTip(100, 15);
//console.log(tip);
//displayResult(100,tip)