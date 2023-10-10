// Įvesti naturalų skaičių a
var a = parseInt(prompt("Įveskite naturalų skaičių a:"));

// Inicializuoti daliklių ir lyginių daliklių sumas
var dalikliuSuma = 0;
var lyginiuDalikliuSuma = 0;

// Ciklas, kuris ieško daliklių nuo 1 iki a
for (var daliklis = 1; daliklis <= a; daliklis++) {
    // Tikriname, ar daliklis dalijasi be liekanos iš a
    if (a % daliklis === 0) {
        dalikliuSuma += daliklis; // Pridedame daliklį prie daliklių sumos
        if (daliklis % 2 === 0) {
            lyginiuDalikliuSuma += daliklis; // Pridedame lyginį daliklį prie lyginių daliklių sumos
        }
    }
}

// Išvedame rezultatus
console.log("Dalikliai skaičiui", a, "yra:", dalikliuSuma);
console.log("Lyginių daliklių suma skaičiui", a, "yra:", lyginiuDalikliuSuma);
