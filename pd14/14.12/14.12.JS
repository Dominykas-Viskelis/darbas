// Įvesti natūralų skaičių a
var a = parseInt(prompt("Įveskite natūralų skaičių a:"));

// Patikriname, ar skaičius yra pirminis
var pirminis = arPirminis(a);

// Funkcija, kuri tikrina, ar skaičius yra pirminis
function arPirminis(sk) {
    if (sk <= 1) {
        return false;
    }
    if (sk <= 3) {
        return true;
    }
    if (sk % 2 === 0 || sk % 3 === 0) {
        return false;
    }
    var i = 5;
    while (i * i <= sk) {
        if (sk % i === 0 || sk % (i + 2) === 0) {
            return false;
        }
        i += 6;
    }
    return true;
}

// Išvedame rezultatą
if (pirminis) {
    console.log(a + " yra pirminis skaičius.");
} else {
    console.log(a + " nėra pirminis skaičius.");
}
