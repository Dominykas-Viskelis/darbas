// Pradiniai duomenys: mažiausias ir didžiausias laiptinės buto numeriai a ir z
var a = 96;
var z = 103;

// Skaičiuojame kiek plokštelių reikės
var plokteliuSkaicius = 0;
for (var numeris = a; numeris <= z; numeris++) {
    plokteliuSkaicius += numeris.toString().length; // Pridedame skaitmenų kiekį buto numeryje
}

// Išvedame rezultatą į HTML dokumentą
var rezultatoDiv = document.createElement('div');
rezultatoDiv.textContent = "Plokštelių skaičius, reikalingas visų butų numeriams: " + plokteliuSkaicius;
document.body.appendChild(rezultatoDiv);
